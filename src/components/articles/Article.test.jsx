// snapshot test
import React from 'react';
import Article from './Article';
import { render } from '@testing-library/react';

describe('Article Component', () => {
  it('Displays an article', () => {
    const { asFragment } = render(
      <Article
        author="Reporter Jones"
        description="The article summary"
        title="The Article Title"
        url="https://article.com/article"
        urlToImage="https://article.com/article.jpeg"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
