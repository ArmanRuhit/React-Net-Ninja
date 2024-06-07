const Home = () => {
    const handleClick = (e) => {
        console.log('Konichiwa', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('konichiwa '+ name, e);
    }
    return ( 
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {
                handleClickAgain('mario', e)
            }}>Click me Again</button>
        </div>
     );
}
 
export default Home;