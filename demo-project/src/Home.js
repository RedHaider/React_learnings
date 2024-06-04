const Home = () => {

    const handleClick = ()=> {
        console.log("He Clicked");
    }

    const againclick = (name)=> {
        console.log('hello'+name);
    }


    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={()=>againclick('Haider')}>He Clicked again</button>
        </div>

     );
}
 
export default Home;