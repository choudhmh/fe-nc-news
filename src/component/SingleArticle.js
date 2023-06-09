import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchSingleArticle } from "../utils/api";
import  FetchComments  from "./FetchComments";
import {patchArticleVotes} from '../utils/api.js'

import ItemRow from "./ItemRow";
import Nav from "./nav";

function SingleArticle({ article }) {

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


  const [userVote, setUserVote] = useState(0);
  const [isVotingErr, setIsVotingErr] = useState(false)

  const hasVoted = userVote !== 0 ||  localStorage.getItem(singleArticle.article_id) === 'voted';

  const onClick =() =>{
    setIsVotingErr(false)
    setUserVote(1);

    localStorage.setItem(singleArticle.article_id, 'voted')
    patchArticleVotes(singleArticle.article_id).catch(() =>{
      setUserVote(0)
      setIsVotingErr(true)
    })
  }

  return (
    <main>
      <h2> Single Article</h2>

      {isLoading ? (
        <p>is Loading....</p>
      ) : (
        <section>
          <Link>
            <p> Article Id:{singleArticle.article_id}</p>
          </Link>
          <p> Author: {singleArticle.author}</p>
          <p> Type: {singleArticle.type}</p>
          <p> Created At: {singleArticle.created_at}</p>
          <p> Topic: {singleArticle.topics}</p>

          <p> Votes: {singleArticle.votes + userVote}

          {/* {singleArticle.votes + userVote} */}
      <button onClick={onClick} disabled={hasVoted}>Vote</button>
      {isVotingErr && <p>Vote didn't go through</p>}

          </p>
          <p> Comment Count: {singleArticle.comment_count}</p>
          <p> Body: {singleArticle.body}</p>
       
       <FetchComments article_id={singleArticle.article_id}/>
       
        </section>
      )}
    </main>
  );
}

export default SingleArticle;
