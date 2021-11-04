import React from 'react';
import Article from './Article';

const ArticleList = ({ articles }) => {
  const articleList = articles.map((article) => {
    return (
      <li key={article.title}>
        <Article {...article} />
      </li>
    );
  });
  return <ul aria-label="articles">{articleList}</ul>;
};

export default ArticleList;
