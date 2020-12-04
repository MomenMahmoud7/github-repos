import React from 'react';

import styles from './Switch.module.scss';

const Switch = ({
  onChange, value,
}) => (
  <button type="button" className={`${styles.ground} ${value ? styles.checked : ''}`}>
    <input onChange={onChange} type="checkbox" className={styles.checkbox} />
    <span className={`${styles.handler} ${value ? styles.active : ''}`} />
  </button>
);

export default Switch;
