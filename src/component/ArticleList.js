import { useEffect, useState } from "react";
import { getArticles } from "../utils/api"

import ItemRow from "./ItemRow";
import Nav from "./nav";



function ArticleList() {

    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState('')
    const [articleList, setArticleList] = useState([]);
  
  
    useEffect(() => {
      setIsLoading(true);
      getArticles(sortBy).then((articleListFromApi) => {
        setArticleList(articleListFromApi);
        setIsLoading(false);
      });
    }, [sortBy]);
  

return(
    <main>
      {/* {isLoading ? (
        <p>is Loading....</p>
      ) : ( */}
     <div>
<select 
values={sortBy}
onChange={(event) => setSortBy(event.target.value)}
>
<option disabled value="">
  Select a Query
</option>
<option value="created_at">Sort by Date</option>
<option value="comment_count">Sort by Comment Count</option>
<option value="votes">Sort by Votes</option>
</select>
</div>
     <ul>
            {articleList.map((article) =>{
            return <ItemRow key={article.article_id} article={article} />

            })}
        </ul>
      {/* )} */}
    </main>
)


}

export default ArticleList;