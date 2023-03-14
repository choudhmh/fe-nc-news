import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Comments from "./Comments";

import { fetchComments } from "../utils/api";
import SingleArticle from "./SingleArticle";

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

          {getComments.map((comment) => {
            return <Comments key={comment.comment_id} comment={comment} />;

          })}
        </div>
      )}
    </main>
  );
}

export default FetchComment;
