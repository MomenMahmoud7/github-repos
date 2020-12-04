import React from 'react';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.container}>
    <img alt="github" src="logo512.png" />
    <h2 id="title">Github Repos</h2>
  </header>
);
export default Header;
