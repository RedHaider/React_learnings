import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const {data:list, isPending, error} = useFetch('http://localhost:8000/list/'+id);

    const handleClick = () => {
        fetch('http://localhost:8000/list/'+id, {
            method: 'DELETE'
        }).then(()=> {navigate('/')})
    }

    return ( 
        <div className="bog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { list && (
                <article>
                    <h2>{list.title}</h2>
                    <p>{list.author}</p>
                    <div>{list.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;