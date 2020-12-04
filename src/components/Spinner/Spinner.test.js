/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';
import styles from './Spinner.module.scss';

const props = {
  message: 'loading',
  size: '48px',
  color: 'white',
  className: 'loading',
};
describe('Spinner component', () => {
  it('renders correctly', () => {
    const spinner = shallow(<Spinner {...props} />);
    const container = spinner.find('div');
    const iconStyle = spinner.find('span').prop('style');
    const message = spinner.find('p').text();

    expect(container.hasClass(styles[props.className])).toBe(true);
    expect(iconStyle).toHaveProperty('width', props.size);
    expect(iconStyle).toHaveProperty('height', props.size);
    expect(iconStyle).toHaveProperty('minWidth', props.size);
    expect(iconStyle).toHaveProperty('minHeight', props.size);
    expect(iconStyle).toHaveProperty('borderColor', props.color);
    expect(message).toBe(`${props.message} ...`);
  });
});
