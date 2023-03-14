import { useEffect, useState } from "react";


import ItemRow from "./ItemRow";
import Nav from "./nav";


function ArticleList({articleList}) {

    const [isLoading, setIsLoading] = useState(true);

return(
    <main>
      {isLoading ? (
        <p>is Loading....</p>
      ) : (
     
     <ul>
            {articleList.map((article) =>{
            return <ItemRow key={article.article_id} article={article} />

            })}
        </ul>
      )}
    </main>
)


}

export default ArticleList;