import React from 'react';
import NewsSearchContainer from './NewsSearch';
import { render, screen } from '@testing-library/react';

describe('Shows News Articles', () => {
  xit('should display a list of articles from the news api', async () => {
    render(<NewsSearchContainer />);
    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();
  });
});
