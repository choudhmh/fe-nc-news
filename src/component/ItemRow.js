import { useEffect, useState } from "react";

import {patchArticleVotes} from '../utils/api.js'

import { Link } from "react-router-dom";

function ItemRow({ article }) {

  const [userVote, setUserVote] = useState(0);
  const [isVotingErr, setIsVotingErr] = useState(false)

  const hasVoted = userVote !== 0 ||  localStorage.getItem(article.article_id) === 'voted';

  const onClick =() =>{
    setIsVotingErr(false)
    setUserVote(1);

    localStorage.setItem(article.article_id, 'voted')
    patchArticleVotes(article.article_id).catch(() =>{
      setUserVote(0)
      setIsVotingErr(true)
    })
  }

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
      {article.votes + userVote}
      <button onClick={onClick} disabled={hasVoted}>Vote</button>
      {isVotingErr && <p>Vote didn't go through</p>}

      <h3>Article_img_url </h3>
      {<img src={article.article_img_url} width={100} height={50} />}
      <h3>Comment Count </h3>
      {article.comment_count}
    </li>
  );
}

export default ItemRow;
