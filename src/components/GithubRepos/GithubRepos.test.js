/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import GithubRepos from './GithubRepos';

describe('GithubRepos component', () => {
  it('renders correctly', () => {
    const githubRepos = shallow(<GithubRepos />);
    const pagination = githubRepos.find('#pagination');
    const filterLabel = githubRepos.find('#filterLabel').text();
    const switchComponent = githubRepos.find('#switch');
    const list = githubRepos.find('#list');

    expect(pagination.exists()).toBe(true);
    expect(filterLabel).toBe('Has Stars');
    expect(switchComponent.exists()).toBe(true);
    expect(list.exists()).toBe(true);
  });
});
