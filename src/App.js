import { getArticles } from "./utils/api.js";

import "./App.css";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import Nav from "./component/nav";

import ArticleList from "./component/ArticleList.js";
import SingleArticle from "./component/SingleArticle.js";
import FetchComments from "./component/FetchComments.js";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [articleList, setArticleList] = useState([]);

  const [singleArticle, setSingleArticle] = useState([]);
  const [getComments, setGetComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articleListFromApi) => {
      setArticleList(articleListFromApi);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />

      <Routes>
      

        <Route
          path="/articles/:article_id"
          element={<SingleArticle singleArticle={singleArticle} />}
        />

        <Route path="/" element={<ArticleList articleList={articleList} />} />

       
      </Routes>
    </div>
  );
}

export default App;
