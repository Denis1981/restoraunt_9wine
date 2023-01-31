const API_URL = 'http://127.0.0.1:8000/api/v1/';

const getArticleId = async (articleId) => {
    const response = await fetch(API_URL + 'articles/' + articleId);
    return await response.json();
};

const getAllArticles = async () => {
    const response = await fetch(API_URL + 'articles/');
    return await response.json();
};


export {getArticleId, getAllArticles}