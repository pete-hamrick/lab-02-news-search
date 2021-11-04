import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ searchInput, onSubmit, onSearchInput }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="searchInput">Search Articles</label>
      <input
        id="searchInput"
        name="searchInput"
        type="text"
        value={searchInput}
        onChange={onSearchInput}
      />
      <button aria-label="search-articles">Search Articles</button>
    </form>
  );
}

Search.propTypes = {
  searchInput: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSearchInput: PropTypes.func.isRequired,
};
