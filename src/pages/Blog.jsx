import { useContext, useState, useEffect } from 'react';
import { posts, monthNames } from '../posts/index';
import { BlogContext } from './BlogPostContextProvider';
import BlogPost  from './BlogPost'; 


function Blog() {
  
    const sortedPosts = Object.keys(posts).sort((a, b) => a - b);
    const addBracket = (post) => {
        if (selectedPost == post.title) return `[${post.title}]`;
        else return `${post.title}`;
    };
    
    const [selectedSlug, setSelectedSlug] = useState(null);
    const [selectedPost, setHovered] = useState(null);
    const {isPostActive, setPostActive } = useContext(BlogContext);
    useEffect(() => {
        if (!isPostActive)
        {
            setSelectedSlug(null);
            setPostActive(true);
        }
    }, [isPostActive, selectedSlug]);
    
    if (selectedSlug) {
        return (
            <div>
                <BlogPost slug={selectedSlug} />
            </div>
        );
    }
    return (
        <div style={{ padding: '20px' }}>
            {sortedPosts.map((year) => (
                <div key={year}>
                <h2>{year}</h2>
                <ul>
                    {posts[year].map((post) => (
                        <li key={post.slug} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px'}}>
                            <span>{monthNames[post.date.getMonth()]} {post.date.getDate()}</span>
                            <button className="blog-button"
                                onClick={() => setSelectedSlug(post.slug)}
                                onMouseEnter={() => setHovered(post.title)}
                                onMouseLeave={() => setHovered(null)}>
                                    {addBracket(post)}
                            </button>
                        </li>
                    ))}
                </ul>
                </div>
            ))}
        </div>
    );
}

export default Blog;
