import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Jonathan Nilsson - portfolio. Jag är en självlärd Backend och frontend utvecklare.' },
            { name: 'keywords', content: 'portfolio, developer, frontend, backend, php, javascript' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div id="app">
            {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout
