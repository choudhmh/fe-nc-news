import { getArticles } from "./utils/api.js";
import { api } from './utils/api.js'

import "./App.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import Nav from "./component/nav";

import ArticleList from "./component/ArticleList.js";
import SingleArticle from "./component/SingleArticle.js";



function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [articleList, setArticleList] = useState([]);
  const [sortBy, setSortBy] = useState('')
  const [singleArticle, setSingleArticle] = useState([]);
  const [getComments, setGetComments] = useState([]);

  




  return (
    <div className="App">
      <Header />
      <Nav />

      <Routes>
      
<Route path="/" element={<ArticleList articleList={articleList} />} />

        <Route
          path="/articles/:article_id"
          element={<SingleArticle singleArticle={singleArticle} />}
        />


       
      </Routes>
    </div>
  );
}

export default App;
