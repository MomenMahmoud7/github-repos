/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Switch from './Switch';

import styles from './Switch.module.scss';

describe('Switch component', () => {
  it('renders active correctly', () => {
    const switchComponent = shallow(<Switch value />);
    const button = switchComponent.find('button');
    const handler = switchComponent.find('span');

    expect(button.hasClass(styles.checked)).toBe(true);
    expect(handler.hasClass(styles.active)).toBe(true);
  });

  it('renders inActive correctly', () => {
    const switchComponent = shallow(<Switch value={false} />);
    const button = switchComponent.find('button');
    const handler = switchComponent.find('span');

    expect(button.hasClass(styles.checked)).toBe(false);
    expect(handler.hasClass(styles.active)).toBe(false);
  });
});
