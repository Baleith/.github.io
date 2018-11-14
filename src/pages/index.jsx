import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import { Contact } from '../components/nav/contact';
import { Home } from '../components/nav/home/home';
import { HomeMobile } from '../components/nav/home/homeMobile';
import { Bottom } from '../components/nav/bottom';
import { Landing } from '../components/landing/landing';
import Layout from '../components/layout';
import { Projects } from '../components/projects/projects';
import { FooterContainer } from '../components/footer/footerContainer';
import { About } from '../components/nav/about';

export default class IndexPage extends Component {
  state = {
    aboutActive: false,
    contactActive: false,
  };

  handleClickAbout = () => {
    this.setState(state => ({
      contactActive: false,
      aboutActive: !state.aboutActive,
    }));
  }

  handleClickContact = () => {
    this.setState(state => ({
      aboutActive: false,
      contactActive: !state.contactActive,
    }));
  }

  handleClickHome = () => {
    this.setState(({
      aboutActive: false,
      contactActive: false,
    }));
  }

  render() {
    const { aboutActive, contactActive } = this.state;
    return (
      <Layout>
        <MediaQuery query="(min-width: 1000px)">
          <About aboutActive={aboutActive} onClick={this.handleClickAbout} />
          <Home
            aboutActive={aboutActive}
            contactActive={contactActive}
            onClick={this.handleClickHome}
          />
          <Contact contactActive={contactActive} onClick={this.handleClickContact} />
        </MediaQuery>
        <MediaQuery query="(max-width: 1001px)">
          <HomeMobile
            handleClickAbout={this.handleClickAbout}
            handleClickContact={this.handleClickContact}
          />
        </MediaQuery>
        <Landing contactActive={contactActive} aboutActive={aboutActive} />
        <Bottom />
        <Projects />
        <FooterContainer />
      </Layout>
    );
  }
}
/* onClick={() => this.handleClick('moveToRight')} */
{/* <MediaQuery query="(min-width: 900px)">
</MediaQuery> */}