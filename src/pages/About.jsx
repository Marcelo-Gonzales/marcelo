import BlogPost from './BlogPost';

function About(){
    return(
        <>
        <div style={{ padding: '50px' }}>
            <BlogPost slug={'about'}/>
            <a className="bracket-link" href="/resume.pdf">résumé</a>
        </div>
        </>
    );
}

export default About;