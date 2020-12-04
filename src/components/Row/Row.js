/* eslint-disable camelcase */
import React, { useReducer } from 'react';

import styles from './Row.module.scss';

const Row = ({
  name = '', stargazers_count = 0, description = '', clone_url = '',
}) => {
  const [{ hidden, stars }, setState] = useReducer((prev, next) => ({ ...prev, ...next }), {
    hidden: true,
    stars: stargazers_count,
  });

  const toggleVisibility = () => {
    setState({ hidden: !hidden });
  };

  const toggleStar = (event) => {
    if (stars === stargazers_count) setState({ stars: stargazers_count + 1 });
    else setState({ stars: stars - 1 });
    return null;
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.container}>
      <button
        id="header"
        type="button"
        onClick={toggleVisibility}
        className={styles.header}
      >
        <a
          id="link"
          href={clone_url}
          target="_blank"
          rel="noreferrer"
          onClick={stopPropagation}
        >
          {name}
        </a>
        <span>
          <span id="starsCount">{stars}</span>
          <i
            id="star"
            role="button"
            tabIndex={0}
            aria-label="star"
            onClick={toggleStar}
            onKeyDown={() => null}
            className={`${styles.star} ${stars === stargazers_count ? 'far fa-star' : 'fa fa-star'}`}
          />
          <i id="arrow" className={`fa fa-caret-down ${hidden ? '' : styles.up}`} />
        </span>
      </button>
      <div id="descriptionContainer" className={`${styles.content} ${hidden ? styles.hidden : ''}`}>
        <h4 id="descriptionTitle">Description</h4>
        <span id="description">{description || 'No Data'}</span>
      </div>
    </div>
  );
};
export default Row;
