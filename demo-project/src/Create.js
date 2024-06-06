


const Create = () => {
    return ( 
        <div className="create">
            <h1>Create a Blog Record</h1>
            <form>
                <label>Title:</label>
                <input type="text" required/>
                <label>Body:</label>
                <textarea>
                </textarea>
                <label>Author:</label>
                <input type="text" required/>
            </form>
        </div>
     );
}
 
export default Create;