import {Link } from 'react-router-dom'

const Blogs = (props ) => {
const list = props.list;
const title = props.title;


    return ( 
        <div>
         <h1>{title}</h1>
        {list.map((item)=>(
            <div key={item.id} className="post">
                <Link to={`/blog/${item.id}`}>
                <h3>{item.title}</h3>
                </Link>
                <p>{item.body}</p>
                <p>{item.author}</p>
                <p><strong>{item.id}</strong></p>
            </div>
        ))}
        </div>
     );
}
 
export default Blogs;


// <button onClick={()=>deleteButton(item.id)}>Delete</button> 