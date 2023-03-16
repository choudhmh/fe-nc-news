import { deleteComments } from "../utils/api";
import { useState, useEffect } from "react";

export const DeleteComment = (props) => {
    
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (loading) {
      setMessage("Comment getting deleted!!");
    }
  }, [loading]);

  const handleSubmit = (e) => {
    e.preventDefault();

    deleteComments(props.comment_id).then(() => {
      setLoading(true);
      props.setComments(
        props.comments.filter(
          (comment) => comment.comment_id !== props.comment_id
        )
      );
      setLoading(false);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button onClick={handleSubmit} type="submit">
          {" "}
          Delete
        </button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};