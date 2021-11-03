export const fetchArticles = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=strike&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=20`
  );
  const articles = await res.json();
  console.log('articles', articles.articles);
  return articles.articles;
};
