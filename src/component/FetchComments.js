import { useEffect, useState } from "react";

import Comments from "./Comments";

import { fetchComments } from "../utils/api";
import { NewComment } from "./NewComments";


function FetchComment({ article_id }) {
  const [isLoading, setIsLoading] = useState(true);

  const [getComments, setGetComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchComments(article_id).then((commentData) => {
      setGetComments(commentData);
      setIsLoading(false);
    });
  }, [article_id])

  return (
    <main>
      <h2> Display Comments</h2>

      {isLoading ? (
        <p>is Loading....</p>
      ) : (

        
        <div>

<NewComment getComments={getComments} setGetComments={setGetComments}/>

{/* <DeleteComment setGetComments = {setGetComments} /> */}

          {getComments.map((comment) => {
            return <Comments key={comment.comment_id} comment={comment}  article_id={article_id} setGetComments={setGetComments}/>;

          })}
        </div>
      )}
    </main>
  );
}

export default FetchComment;
