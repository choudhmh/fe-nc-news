import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchSingleArticle } from "../utils/api";

import ItemRow from "./ItemRow";
import Nav from "./nav";

function SingleArticle() {
  const [singleArticle, setSingleArticle] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { article_id } = useParams();

  // Single Article using param
  useEffect(() => {
    setIsLoading(true);

    fetchSingleArticle(article_id).then((singleArticleData) => {
      setSingleArticle(singleArticleData);

      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <main>
      <h2> Single Article</h2>

      {isLoading ? (
        <p>is Loading....</p>
      ) : (
        <p>
          <Link>
            <p> Article Id:{singleArticle.article_id}</p>
          </Link>
          <p> Author: {singleArticle.author}</p>
          <p> Type: {singleArticle.type}</p>
          <p> Created At: {singleArticle.created_at}</p>
          <p> Topic: {singleArticle.topics}</p>
          <p> Votes: {singleArticle.votes}</p>
          <p> Comment Count: {singleArticle.comment_count}</p>
        </p>
      )}
    </main>
  );
}

export default SingleArticle;
