import React from 'react';
import { string, func, node } from 'prop-types';
import styles from './button.module.scss';


export const Button = ({ text, onClick, children }) => (
  <button
    className={styles.button}
    type="button"
    onClick={onClick}
  >
    {text}
    {children}
  </button>
);

Button.defaultProps = {
  text: null,
  children: null,
};

Button.propTypes = {
  text: string,
  onClick: func.isRequired,
  children: node,
};
