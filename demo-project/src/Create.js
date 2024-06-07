import { useState } from "react";
import { useNavigate } from 'react-router-dom';


const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuther] =useState('yoshi')
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleCreateSubmit = (e) => {
             e.preventDefault();
             const list = { title, body, author }

             setIsPending(true);

             fetch('http://localhost:8000/list',{
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(list)
             }).then(()=>{
                console.log('BLog Published')
                setIsPending(false)
             })
             console.log(list)

             navigate('/');
    }

    return ( 
      <div className="create">
        <h1>Create a Blog Record</h1>
        <form className="form-create" onSubmit={handleCreateSubmit} >
          <div className="create_row">
            <label>Title:</label>
            <input type="text" 
            value={title} 
            onChange={(e)=> setTitle(e.target.value)}
             required/>
          </div>
          <div className="create_row">
            <label>Body:</label>
            <textarea
            value={body} 
            onChange={(e)=> setBody(e.target.value)}
             required></textarea>
          </div>
          <div className="create_row">
            <label>Author:</label>
            <input type="text" 
            value={author} 
            onChange={(e)=> setAuther(e.target.value)}
             required/>
          </div>
          {!isPending && <button type="submit" className="create-button">Publish</button>}
          {isPending && <button type="submit" className="create-button" disabled>Submitting....</button>}
        </form>
      </div>
    );
  }
   
  export default Create;