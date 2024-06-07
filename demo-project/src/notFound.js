import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="Not Found">
            <h2>Sorry</h2>
            <p>
                That page doesnt exist anymore
            </p>
            <Link to={"/"}>Back to HomePage</Link>
        </div>
     );
}
 
export default NotFound;