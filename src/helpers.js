import axios from 'axios';

export const githubAPIUrl = ({ activePage, withStars }) => {
  const url = 'https://api.github.com/search/repositories?';
  const filter = `q=created:>2017-01-10${withStars ? '+stars:>=0' : ''}`;
  const sort = withStars ? '&sort=stars&order=desc' : '';
  const page = `&page=${activePage}`;
  return url + filter + sort + page;
};

export const getPublicReposData = (url) => axios
  .get(url)
  .then(({ data: { items } }) => items);
