import React from 'react';
import styles from './Spinner.module.scss';

const Spinner = ({
  message, size, color, className,
}) => (
  <div className={`${styles.container} ${className}`}>
    <span
      className={styles.spinner}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        borderColor: color,
      }}
    />
    {message && <p>{`${message} ...`}</p>}
  </div>
);
export default Spinner;
