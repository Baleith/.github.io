import React from 'react';
import { func, bool } from 'prop-types';
import { IconContext } from 'react-icons';
import { MdClose } from 'react-icons/md';
import styles from './dropDown.module.scss';
import { Button } from './button';


export const DropDown = ({ isOpen, onClickMenu, handleClickAbout, handleClickContact }) => (
  <div>
    <div className={`${styles.transparentBackground} ${isOpen ? styles.isOpenBackground : null}`} />
    <div className={`${styles.dropDown} ${isOpen ? styles.isOpen : styles.isClosed}`}>
      <div className={styles.menuToggleContainer}>
        <Button onClick={onClickMenu}>
          <IconContext.Provider value={{ className: styles.close }}>
            <div>
              <MdClose />
            </div>
          </IconContext.Provider>
        </Button>
      </div>
      <ul>
        <li>
          <Button onClick={handleClickContact} text="Kontakt" />
        </li>
        <li>
          <Button onClick={handleClickAbout} text="Om mig" />
        </li>
      </ul>
    </div>
  </div>
);

DropDown.propTypes = {
  isOpen: bool.isRequired,
  handleClickAbout: func.isRequired,
  handleClickContact: func.isRequired,
  onClickMenu: func.isRequired,
};
