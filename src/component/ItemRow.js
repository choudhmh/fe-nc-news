import { useEffect, useState } from "react";



function ItemRow({article}){

    return(
        <li>
            <h3>Author</h3>{article.author}
            <h3> Title:</h3> {article.title}
            <h3>Topic </h3>{article.topic}
            <h3>Created At </h3>{article.created_at}
            <h3>Votes</h3>{article.votes}
            <h3>Article_img_url </h3>{article.article_img_url}
            <h3>Comment Count </h3>{article.comment_count}
        </li>
    )
}

export default ItemRow;