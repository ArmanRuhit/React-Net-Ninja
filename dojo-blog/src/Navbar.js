const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The dojo blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: 'green',
                    backgroundColor: 'red',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
