/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('renders correctly', () => {
    const header = shallow(<Header />);
    const githubIcon = header.find('#githubIcon');
    const title = header.find('#title').text();
    expect(githubIcon.exists()).toBe(true);
    expect(title).toBe('Github Repos');
  });
});
