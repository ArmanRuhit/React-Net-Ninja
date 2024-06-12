import { useParams } from "react-router-dom";
import useFetch from "./UseFetch";

const Blog = () => {
    const {id} = useParams();
    const {data: blog, isPending, err} = useFetch('http://localhost:8000/blogs/'+id)

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div> }
            {err && <div>{err}</div> }
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default Blog;