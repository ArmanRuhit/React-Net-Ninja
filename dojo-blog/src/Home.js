import BlogList from './BlogList';
import {useState, useEffect} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [err, setIsError] = useState(null);

    useEffect(() => {
        setTimeout(
            () => {fetch('http://localhost:8000/blogss')
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data');
                }
                return res.json();
            }).then((data) => {
                setBlogs(data);
                setIsPending(false);
                setIsError(null);
        }).catch(err => {
            setIsError(err.message);
            setIsPending(false);
        })
    },1000);
    }, []);

    return ( 
        <div className="home">
            {err && <div>{err}</div> }
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!'></BlogList>}
        </div>
     );
}
 
export default Home;