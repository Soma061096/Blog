import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
   const [title, setTitle] = useState('');
   const [body, setBody] = useState('');
   const [author, setAuthor] = useState('mario');
   const [isPanding, setIsPanding] = useState(false)
   const history=useHistory();

   const handleSubmit=(e)=>{
    e.preventDefault();
    const blog={title,body,author};

    setIsPanding(true);
     fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPanding(false);
      //history.go(-1);
      history.push('/');
    })
    
  }
  
    return ( 
        <div className="Create">
     <h2>Add a new blog</h2>
     <form onSubmit={handleSubmit}>
     <label >Blog title:</label>
     <input type="text" requried value={title}
     onChange={(e)=>setTitle(e.target.value)}/>
     <label >Blog body:</label>
     <textarea requried value={body}
     onChange={(e)=>setBody(e.target.value)}></textarea>
     <label >Blog author:</label>
     <select value={author}
     onChange={(e)=>setAuthor(e.target.value)}>
     <option value="X-man">X-man</option>
     <option value="Y-man">Y-man</option>
     </select>
     {!isPanding && <button > Add Blog</button>}
     {isPanding && <button disabled> Adding Block</button>}
     </form>
     
        </div>
     );
}
 
export default Create;