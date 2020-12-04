/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ReposList from './ReposList';

const propsLoading = {
  loading: true,
};

const propsError = {
  loading: false,
  error: { message: 'error' },
};

const props = {
  loading: false,
  data: [{ id: 'row1' }, { id: 'row2' }],
};

describe('List component', () => {
  it('renders spinner correctly', () => {
    const list = shallow(<ReposList {...propsLoading} />);
    const spinner = list.find('#spinner');
    expect(spinner.exists()).toBe(true);
  });

  it('renders error correctly', () => {
    const list = shallow(<ReposList {...propsError} />);
    const error = list.find('#error').text();
    expect(error).toBe('error');
  });

  it('renders list correctly', () => {
    const reposList = shallow(<ReposList {...props} />);
    const list = reposList.find('#list');
    expect(list.children()).toHaveLength(props.data.length);
  });
});
