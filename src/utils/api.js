import axios from "axios";

const ncNews = axios.create({
  baseURL: "https://northcoders-bcnews.onrender.com/api",
});

let path = `/articles`;

export const getArticles = () => {
  return ncNews.get(path).then(({ data }) => {
    return data.article;
  });
};

export const fetchSingleArticle = (article_id) => {
  return ncNews.get(`${path}/${article_id}`).then((data) => {
    return data.data.article[0];
  });
};

export const fetchComments = (article_id) => {
  return ncNews
    .get(`${path}/${article_id}/comments`)
    .then(( data) => {
        console.log(data)
         return data.data.comment;
    });
};

export const patchArticleVotes = (article_id) =>{
  
  return ncNews.patch(`${path}/${article_id}`, {
      inc_votes: 1, 
    })
      .then((response) => {
          console.log(response.data)
          return response.data.article;
      })
}
