// NewsSearch Container
import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/articles/Search';
import { fetchArticles } from '../services/NewsAPI';

class NewsSearchContainer extends Component {
  state = {
    loading: 'true',
    articles: [],
  };

  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({ articles, loading: false });
  }
  render() {
    const { loading, articles } = this.state;

    return (
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Search />
            <ArticleList articles={articles} />
          </>
        )}
      </>
    );
  }
}

export default NewsSearchContainer;
