import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./UseFetch";

const Blog = () => {
    const {id} = useParams();
    const {data: blog, isPending, err} = useFetch('http://localhost:8000/blogs/'+id)
    const navigate = useNavigate();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method:'DELETE',
        }).then(() => {
            console.log('Blog Deleted');
            navigate('/');
        })
    }

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div> }
            {err && <div>{err}</div> }
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default Blog;