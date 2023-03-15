import { useState } from "react";
import Button from "react-router-dom";
import { patchArticleVotes } from "./utils/api";

function VoteOnArticle({ article }) {
  const [votes, setVotes] = useState(article.votes);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function handleClick(event) {
    event.target.disabled = true;
    setErrorMessage("");
    setSuccessMessage("You voted!");
    setVotes((currVotes) => {
      return +currVotes + 1;
    });

    patchArticleVotes(article.article_id).catch(() => {
      setVotes((currVotes) => {
        return +currVotes - 1;
      });
      setSuccessMessage("");
      setErrorMessage("Sorry seems that didn't work, please try again");
      event.target.disabled = false;
    });
  }

  return (
    <section>
      <div>
        <Button
          className="votes-button"
          onClick={(event) => {
            handleClick(event);
          }}
        >
          Votes {votes}
        </Button>
      </div>
      <p>{successMessage}</p>
      <p>{errorMessage}</p>
    </section>
  );
}

export default VoteOnArticle;
