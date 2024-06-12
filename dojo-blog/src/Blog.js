import { useParams } from "react-router-dom";

const Blog = () => {
    const {id} = useParams();
    // console.log("Blog page is called")
    return ( 
        <div className="blog-details">
            <h2>Blog - {id}</h2>
        </div>
     );
}
 
export default Blog;