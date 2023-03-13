import {
 getArticles
} from "./utils/api.js";

import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from "react";
import { Route, Routes } from 'react-router-dom';

import Header from './component/Header';
import Nav from './component/nav';
import ArticleList from "./component/ArticleList.js";
 
function App() {

  const [articleList, setArticleList] = useState([]);


  useEffect(() => {
    getArticles().then((articleListFromApi) => {
      setArticleList(articleListFromApi);
    });
  }, []);



  return (
    <div className="App">

    <Header />
    <Nav/>

    <Routes>
        <Route path="/" element={ <ArticleList
            articleList={articleList}
          /> } />
  </Routes>

    </div>
  );
}

export default App;
