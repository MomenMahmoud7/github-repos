import React, { useReducer } from 'react';
import ReactPaginate from 'react-paginate';
import Switch from '../Switch/Switch';
import ReposList from '../ReposList/ReposList';
import usePromise from '../../usePromise';
import { getPublicReposData, githubAPIUrl } from '../../helpers';

import styles from './GithubRepos.module.scss';

const GithubRepos = () => {
  const [{ withStars, activePage }, setState] = useReducer((prev, next) => ({ ...prev, ...next }), {
    withStars: false,
    activePage: 1,
  });

  const { loading, error, data } = usePromise(
    () => {
      const apiUrl = githubAPIUrl({ activePage, withStars });
      return getPublicReposData(apiUrl);
    },
    [activePage, withStars],
    [],
  );

  const filterHandler = () => {
    setState({ withStars: !withStars });
  };

  return (
    <div className={styles.container}>
      <div className={styles.controller}>
        <ReactPaginate
          id="pagination"
          nextLabel="Next"
          previousLabel="Previous"
          pageRangeDisplayed={10}
          onPageChange={({ selected }) => { setState({ activePage: selected + 1 }); }}
          containerClassName={styles.pagination}
          activeClassName={styles['pagination-link-active']}
          disabledClassName={styles['pagination-link-disabled']}
        />
        <span className={styles.filter}>
          <strong id="filterLabel">Has Stars</strong>
          <Switch id="switch" value={withStars} onChange={filterHandler} />
        </span>
      </div>
      <div className={styles.content}>
        <ReposList id="list" loading={loading} error={error} data={data} />
      </div>
    </div>
  );
};
export default GithubRepos;
