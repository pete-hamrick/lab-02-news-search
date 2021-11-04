import React from 'react';

export default function Search() {
  return (
    <form>
      <label htmlFor="searchInput">Search Articles</label>
      <input
        id="searchInput"
        name="searchInput"
        type="text"
        value="searchQuery"
      />
      <button aria-label="search-articles">Search Articles</button>
    </form>
  );
}
