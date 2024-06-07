import './App.css';

function App() {
  const title = 'Welcome to the new blog';
  const like = 50;
  const link = 'www.google.com';
  return (
    <div className="App">
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
