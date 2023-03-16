import { postComment } from "../utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";


export const NewComment = ({  setGetComments, comments }) => {

  const { article_id } = useParams();
  console.log(article_id)
  const [newComment, setNewComment] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();

    setGetComments((comments)=>{

      return [ {
        article_id: article_id,
        author: "grumpy19",
        body: newComment,
        comment_id: -1,
        created_at: new Date().toISOString(),
        votes: 0,
      }, ...comments]
    })
      
    postComment(article_id, newComment)
    
    .catch((error) => {
      console.error("Error while posting comment:", error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button id="postCommentButton" type="submit">Post Comment</button>
    </form>
  );
};