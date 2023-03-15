import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function ItemRow({ article }) {

 

  return (
    <li>
      <h3>Author</h3> {article.author}
      <h3> Title:</h3>{" "}
      <Link to={`/articles/${article.article_id}`}> {article.title}</Link>
      <h3>Topic </h3>
      {article.topic}
      <h3>Created At </h3>
      {article.created_at}
      <h3>Votes</h3>
      
      <h3>Article_img_url </h3>
      {<img src={article.article_img_url} width={100} height={50} />}
      <h3>Comment Count </h3>
      {article.comment_count}
    </li>
  );
}

export default ItemRow;
