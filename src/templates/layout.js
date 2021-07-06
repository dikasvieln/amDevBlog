import React from 'react';
import 'prismjs/themes/prism.css';
// import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import '../global-styles';
import userConfig from '../../config';

import Header from '../components/Header';
import { StaticQuery } from 'gatsby';

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        
        <StaticQuery query={graphql`
          query SiteTitleQuery{
            site {
              siteMetadata {
                title
                menuLinks {
                  name
                  link
                }
              }
            }
          }
        `}
        render={data => (
          <React.Fragment>
            {/* <Helmet
              title={'title'}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
          </Helmet> */}
          <Header config={userConfig} menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
          </React.Fragment>
        )
        }></StaticQuery>

        {children}
      </div>
    );
  }
}

export default Template;
