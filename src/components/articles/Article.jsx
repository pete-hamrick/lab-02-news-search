import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ author, description, title, url, urlToImage }) => (
  <article>
    <h2>{title}</h2>
    <img src={urlToImage} alt={title} style={{ height: 200 }}></img>
    <h4>{author}</h4>
    <p>{description}</p>
    <a href={url}>Read The Article</a>
  </article>
);

Article.propTypes = {
  author: PropTypes.string,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
};

export default Article;
