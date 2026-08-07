import { createContext, useState } from "react";

export const BlogContext = createContext();

function BlogPostContextProvider({ children }){
    const [isPostActive, setPostActive] = useState(true);

    return(
        <BlogContext.Provider value={{isPostActive, setPostActive }}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogPostContextProvider;