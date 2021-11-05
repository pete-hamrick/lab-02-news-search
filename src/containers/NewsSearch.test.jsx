import React from 'react';
import NewsSearchContainer from './NewsSearch';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Shows News Articles', () => {
  it('should display a list of articles from the news api', async () => {
    render(<NewsSearchContainer />);
    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();

    const searchInput = await screen.findByLabelText('Search Articles');
    userEvent.type(searchInput, 'strike');

    const submitButton = await screen.findByRole('button', {
      name: 'search-articles',
    });

    userEvent.click(submitButton);

    // await waitForElementToBeRemoved(screen.getByText('Loading...'));

    await waitFor(() => {
      const articles = screen.getAllByText('Description', { exact: false });

      expect(articles).toHaveLength(3);
    });
  });
});
