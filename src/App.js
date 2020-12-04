import React from 'react';
import GithubRepos from './components/GithubRepos/GithubRepos';
import Header from './components/Header/Header';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.container}>
    <Header />
    <GithubRepos />
  </div>
);

export default App;
