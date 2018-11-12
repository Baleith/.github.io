import React from 'react';
import { bool } from 'prop-types';
import { IconContext } from 'react-icons';
import { TiSocialLinkedin, TiMail } from 'react-icons/ti';
import styles from './contact.module.scss';

export const Contact = ({ isOpen }) => {
  function openMailClient() {
    const username = 'jonathan.j.nilsson';
    const domain = 'gmail.com';
    window.location.href = `mailto:${username}@${domain}`;
  }
  return (
    <div id="contact" className={`${styles.container} ${isOpen ? styles.isOpening : styles.isClosing}`}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          {'Kontakta mig'}
        </h1>
      </div>

      <div className={styles.bodyContainer}>
        <p className={styles.body}>Vad trevligt att du vill prata med mig.</p>
        <p className={styles.body}>Det gör du enklast över mail,</p>
        <p className={styles.body}>eller på LinkedIn.</p>

        <div className={styles.linksContainer}>
          <div
            className={styles.mailContainer}
            onClick={openMailClient}
            onKeyPress={openMailClient}
            role="button"
            tabIndex={0}
          >
            <IconContext.Provider value={{ className: styles.mail }}>
              <div>
                <TiMail />
              </div>
            </IconContext.Provider>
          </div>
          <div className={styles.linkedInContainer}>
            <a href="https://www.linkedin.com/in/jonathan-nilsson-263b70153/" target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{ className: styles.linkedin }}>
                <div>
                  <TiSocialLinkedin />
                </div>
              </IconContext.Provider>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  isOpen: bool.isRequired,
};
