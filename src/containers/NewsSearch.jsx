// NewsSearch Container
import React, { Component } from 'react';
import ArticleList from '../components/articles/ArticleList';
import Search from '../components/articles/Search';
import { fetchArticles } from '../services/NewsAPI';

class NewsSearchContainer extends Component {
  state = {
    loading: 'true',
    articles: [],
    searchInput: 'United States',
  };

  async componentDidMount() {
    const articles = await fetchArticles(this.state.searchInput);
    this.setState({ articles, loading: false });
  }

  handleSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const articles = await fetchArticles(this.state.searchInput);
    this.setState({ articles, loading: false });
  };

  render() {
    const { loading, articles, searchInput } = this.state;

    return (
      <>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <Search
              searchInput={searchInput}
              onSearchInput={this.handleSearchInput}
              onSubmit={this.handleSubmit}
            />
            <ArticleList articles={articles} />
          </>
        )}
      </>
    );
  }
}

export default NewsSearchContainer;
