import { deleteComments } from "../utils/api";
import { useState, useEffect } from "react";



function Comments({ comment, article_id, setGetComments}) {

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const[checkDeletion, setCheckDeletion] = useState('')


  useEffect(() => {
    if (loading) {
      setMessage("Comment getting deleted!!");
    }
  }, [loading]);



  const handleDelete = (comment_id) =>{
    
    setGetComments((comments)=>{

      return  comments.filter((comment) =>{
        if(comment.comment_id != comment_id){
          return true
        }else{
          return false;
        }
        
       })
  
      
    })
    deleteComments(article_id, comment_id)
    setMessage("Comment  deleted!!");
  }
  
  return (
    
     <>
    
  <div>
      <h3>Comment</h3> {comment.body}
    </div>
    
      <button onClick={() =>{handleDelete(comment.comment_id)}}>
        {" "}
        Delete
      </button>
  
  </>

  );
}

export default Comments;