import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="notFound">
            <h2>Sorry</h2>
            <p>This page is not available</p>
            <Link to='/'>Go To Homepage......</Link>
        </div>
      );
}
 
export default NotFound;