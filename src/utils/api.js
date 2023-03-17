import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://northcoders-bcnews.onrender.com/api",
});

let path = `/articles`;

export const getArticles = (sort_by) => {
  return ncNews.get(path,{
    params: {
      limit: 30,
      sort_by
    }
  })
  .then(({ data }) => {
    return data.article;
  });
};

export const fetchSingleArticle = (article_id) => {
  return ncNews.get(`${path}/${article_id}`)
  .then((data) => {
    return data.data.article[0];
  });
};

export const fetchComments = (article_id) => {
  return ncNews
    .get(`${path}/${article_id}/comments`)
    .then(( data) => {
        //console.log(data)
         return data.data.comment;
    });
};

export const patchArticleVotes = (article_id) =>{
  
  return ncNews.patch(`${path}/${article_id}`, {
      inc_votes: 1, 
    })
      .then((response) => {
          
          return response.data.article;
      })
}

export const postComment = (article_id, comment) => {

  const newComment = {
    username: "grumpy19",
    body: comment,
  };
  return ncNews.post(
    `${path}/${article_id}/comments`,
    newComment
  )
  .catch((error) => {
    //console.error(error);
    return error;
    });
};

export const deleteComments = (article_id, comment_id) => {
  //console.log(comment_id, article_id)

  return ncNews.delete(`/comments/${comment_id}`)
  .catch((error) => {
  
    return error;
    });
};

export const fetchTopics = () => {
  return ncNews.get(`/topics`).then((res) =>{
  return res.data.topics;
});
};
