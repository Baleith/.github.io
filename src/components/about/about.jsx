import React from 'react';
import { bool } from 'prop-types';
import styles from './about.module.scss';


export const About = ({ isOpen }) => (
  <div className={`${styles.container} ${isOpen ? styles.isOpening : styles.isClosing}`}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        {'Hej'}
      </h1>
    </div>
    <div className={styles.bodyContainer}>
      <div className={styles.openerText}>
        <p className={styles.italic}>Jag heter <span className={styles.bold}>Jonathan Nilsson</span></p>
        <p className={styles.italic}>Jag letar efter en <span className={styles.bold}>kul</span> och <span className={styles.bold}>lärorik</span> arbetsplats.</p>
      </div>
      <p className={styles.body}>
        Jag är en motiverad front och backend utvecklare som strävar efter att kunna röra mig obehindrat över hela stacken.
      </p>
      <p className={styles.body}>
       Bor för tillfället ett par mil utanför Ronneby men jag söker jobb i hela södra Sverige.
      </p>
      <p className={styles.body}>
        Om du läser detta skicka gärna ett meddelande och säg hej!
      </p>
    </div>
  </div>
);

About.propTypes = {
  isOpen: bool.isRequired,
};
