import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

function BlogPost({ slug }) {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;
        setLoading(true);

        fetch(`/posts/${slug}.md`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Markdown file not found');
                }
                return response.text();
            })
            .then((text) => {
                const match = text.match(/^---\s*([\s\S]*?)\s*---\s*([\s\S]*)$/);
                
                if (match) {
                    const frontMatter = match[1];
                    const markdownBody = match[2];

                    const titleMatch = frontMatter.match(/title:\s*(.*)/);
                    if (titleMatch) {
                        setTitle(titleMatch[1].replace(/['"]/g, ''));
                    }

                    setContent(markdownBody);
                } else {
                    setContent(text); 
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setContent("### Post Not Found\nWe couldn't find the article you were looking for.");
                setLoading(false);
            });
    }, [slug]);

    if (loading) return <h2>Loading post...</h2>;

    return (
        <article style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </article>
    );
}

export default BlogPost;
