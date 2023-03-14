import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchComments } from "../utils/api";

import ItemRow from "./ItemRow";
import Nav from "./nav";

function fetchComments() {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  const[getComments, setGetComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetchComments(article_id).then((CommentData) => {
        setGetComments(CommentData);

      setIsLoading(false);
    });
  }, [article_id]);


return(
    <main></main>
)

}

export default fetchComments;
