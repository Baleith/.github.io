import React from 'react';
import { bool } from 'prop-types';
import styles from './welcome-text.module.css';

export const WelcomeText = ({ aboutActive, contactActive }) => {
  const isOpen = aboutActive || contactActive;
  return (
    <div className={`${styles.container} ${!isOpen ? styles.isOpening : styles.isClosing}`}>
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>
          <span className={styles.span1} />
          <span className={styles.span2} />
          <span className={styles.span3} />
          <span className={styles.span4} />
          <span className={styles.span5} />
          {'HEJ.'}
        </h1>
      </div>
    </div>
  );
};
WelcomeText.propTypes = {
  contactActive: bool.isRequired,
  aboutActive: bool.isRequired,
};
