import { bool, func } from 'prop-types';
import React from 'react';
import styles from './home.module.scss';

export const Home = ({ aboutActive, contactActive, onClick }) => {
  const isOpen = aboutActive || contactActive;
  return (
    <div
      id="top"
      className={styles.top}
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex={0}
    >
      <span className={`${!isOpen ? styles.active : styles.inActive} ${styles.span}`}>
        {'Välkommen'}
      </span>
    </div>
  );
};
Home.propTypes = {
  contactActive: bool.isRequired,
  aboutActive: bool.isRequired,
  onClick: func.isRequired,
};
