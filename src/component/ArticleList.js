import { useEffect, useState } from "react";
import { getArticles } from "../utils/api"

import ItemRow from "./ItemRow";
import Nav from "./nav";



function ArticleList() {

    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState('')
    const [articleList, setArticleList] = useState([]);

    const [item, setItem] = useState(articleList);

    const menuItems = [...new Set(articleList.map((Val) => Val.date))];
    
    const filterItem = (curcat) => {
      const newItem = articleList.filter((newVal) => {
        return newVal.date === curcat;
      });
      setItem(newItem);
    };

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
<button filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems}>Vote</button>

<button>Comment Count</button>
<button>Date</button>
</div>
     <ul>
      
            {articleList.map((article) =>{
            return <ItemRow key={article.article_id} article={article} item={item}  />

            })}
        </ul>
      {/* )} */}
    </main>
)


}

export default ArticleList;