import { useEffect, useState } from "react";

import {Link} from "react-router-dom";

import ItemRow from "./ItemRow";

function ListOfArticles({articleList}){

console.log(articleList)
  
    return(
      <main>
      
     
        <div><h2> List of All Articles </h2></div>
       
      
            {articleList.map((article) =>{
            return  <ItemRow key={article.article_id} item={article} />  
            })}

        
</main>
    )
}

export default ListOfArticles