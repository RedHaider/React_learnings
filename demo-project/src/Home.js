import { useState , useEffect } from "react";
import Blogs from "./Blogs";

const Home = () => {


const [list, setList] = useState(null);
const [isPending , setisPending]= useState(true);
const [error, setError] = useState(null)


useEffect(()=>{
    fetch('http://localhost:8000/list')
    .then(res=> {
        if(!res.ok){
            throw Error('Could not fetch the data for that resourse');
        }
        return res.json();
    }).then(data => {
        setList(data);
        setisPending(false);
        setError=(null)
    }).catch(err=> {
        setisPending(false);
        setError(err.message);
    })
},[]);

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {list && <Blogs list={list} title="Title" />}
        </div>

     );

};
export default Home;

// setting the time to delay the execution
// setTimeout(()=>{
//     fetch('http://localhost:8000/list').then(res=> {
//         return res.json();
//     }).then(data => {
//         setList(data);
//         setisPending(false);
//     })
//  },1000);


// const deleteButton = (id) => {
//     const newlist = list.filter(list => list.id != id);
//     setList(newlist);
// }


// <Blogs list={list.filter((list) =>
//     list.author=='Alice'
//     )}
//  title= 'Filtered'
// />


//     const handleClick = ()=> {
//         console.log("He Clicked");
//     }

// const name_1 = 'Mario';
// const age_1 = 30
// const [name, setName] = useState(name_1)
// const [age, setAge] = useState(age_1)

// const handleClick = () => {
//     setName('Haider');
//     setAge(40);
// }