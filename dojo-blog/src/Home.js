import BlogList from './BlogList';
import {useState, useEffect} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id:3}
    ]);

    const [name, setName] = useState('mario');

    useEffect(() => {
        console.log('Hello');
    }, [name, blogs]);


    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs!' handleDelete={handleDelete}></BlogList>
            <button onClick={() => setName('luigi')}>Click me</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;