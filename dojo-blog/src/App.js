import Blog from './Blog';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/blogs/:id' element={<Blog />}></Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
