import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const {data:list, isPending, error} = useFetch('http://localhost:8000/list/'+id);

    return ( 
        <div className="bog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { list && (
                <article>
                    <h2>{list.title}</h2>
                    <p>{list.author}</p>
                    <div>{list.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;