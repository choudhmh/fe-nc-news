import { useEffect, useState } from "react";


import { Link } from "react-router-dom";

function Comments({ comment }) {

  const [getComments, setGetComments] = useState([]);

  
  return (
    
  <div>
      <h3>Comment</h3> {comment.body}
    </div>
  );
}

export default Comments;