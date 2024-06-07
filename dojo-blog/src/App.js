import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  const title = 'Welcome to the new blog';
  const like = 50;
  const link = 'www.google.com';
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
     <div className="conten">
      <h1>{title}</h1>
      <p>Liked {like} times.</p>
      {10}
      {'hello, ninjas'}
      <br />
      <a href={link}>GOOGLE</a>
     </div>
    </div>
  );
}

export default App;
