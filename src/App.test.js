/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/Header/Header';
import GithubRepos from './components/GithubRepos/GithubRepos';

describe('App component', () => {
  it('renders correctly', () => {
    const app = shallow(<App />);
    const header = app.find(Header);
    const githubRepos = app.find(GithubRepos);
    expect(header.exists()).toBe(true);
    expect(githubRepos.exists()).toBe(true);
  });
});
