import axios from 'axios';

const ncNews = axios.create({
    baseURL:'https://northcoders-bcnews.onrender.com/api',
});

export const getArticles = () =>{
    return ncNews.get('/articles').then(({data}) =>{
        
    console.log(data)
        return data.article;
    })
}