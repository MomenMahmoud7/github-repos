/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Row from './Row';

import styles from './Row.module.scss';

const props = {
  name: 'name',
  stargazers_count: 0,
  description: 'description',
  clone_url: 'repoUrl',
};

describe('Row component', () => {
  it('renders correctly', () => {
    const row = shallow(<Row {...props} />);

    const link = row.find('#link').text();
    const starsCount = row.find('#starsCount').text();
    const descriptionTitle = row.find('#descriptionTitle').text();
    const description = row.find('#description').text();

    expect(link).toBe('name');
    expect(starsCount).toBe('0');
    expect(descriptionTitle).toBe('Description');
    expect(description).toBe('description');

    const header = row.find('#header');

    header.simulate('doubleclick');
    const arrowDC = row.find('#arrow');
    const descriptionContainerDC = row.find('#descriptionContainer');
    expect(arrowDC.hasClass(styles.up)).toBe(false);
    expect(descriptionContainerDC.hasClass(styles.hidden)).toBe(true);

    header.simulate('click');
    const arrow = row.find('#arrow');
    const descriptionContainer = row.find('#descriptionContainer');
    expect(arrow.hasClass(styles.up)).toBe(true);
    expect(descriptionContainer.hasClass(styles.hidden)).toBe(false);

    const star = row.find('#star');

    star.simulate('doubleclick');
    const starsCountDC = row.find('#starsCount').text();
    expect(starsCountDC).toBe('0');

    star.simulate('click');
    const starsCountC = row.find('#starsCount').text();
    expect(starsCountC).toBe('1');
  });
});
