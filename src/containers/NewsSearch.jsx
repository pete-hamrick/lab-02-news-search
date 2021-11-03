import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/articles/Search';

class NewsSearchContainer extends Component {
  render() {
    return (
      <>
        <Search />
        <ArticleList />
      </>
    );
  }
}

export default NewsSearchContainer;
