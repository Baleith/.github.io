import { func } from 'prop-types';
import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { MdMenu } from 'react-icons/md';
import styles from './homeMobile.module.scss';
import { DropDown } from './dropDown';
import { Button } from './button';

export class HomeMobile extends Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    handleClickAbout: func.isRequired,
    handleClickContact: func.isRequired,
  }

  toggleMenu = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { handleClickContact, handleClickAbout } = this.props;
    return (
      <nav id="topMobile" className={styles.nav}>
        {
          !isOpen ? (
            <div className={styles.buttonContainer}>
              <Button onClick={this.toggleMenu}>
                <IconContext.Provider value={{ className: styles.open }}>
                  <div>
                    <MdMenu />
                  </div>
                </IconContext.Provider>
              </Button>
            </div>
          )
            : null
        }
        <DropDown
          isOpen={isOpen}
          onClickMenu={this.toggleMenu}
          handleClickAbout={handleClickAbout}
          handleClickContact={handleClickContact}
        />
      </nav>
    );
  }
}
