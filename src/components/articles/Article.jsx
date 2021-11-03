import React from 'react';

const Article = ({ author, description, title, url, urlToImage }) => (
  <article>
    <h2>{title}</h2>
    <img src={urlToImage} alt={title} style={{ height: 200 }}></img>
    <h4>{author}</h4>
    <p>{description}</p>
    <a href={url}>Read The Article</a>
  </article>
);

export default Article;
