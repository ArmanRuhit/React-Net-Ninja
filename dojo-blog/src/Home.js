import BlogList from './BlogList';
import {useState, useEffect} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id:3}
    ]);

    useEffect(() => {
        console.log('Hello');
    });

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}></BlogList>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} handleDelete={handleDelete} title='Marios Blogs!'></BlogList>
        </div>
     );
}
 
export default Home;