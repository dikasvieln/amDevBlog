import React from 'react';
import userConfig from '../../../config';

import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

// import 'prop-types' from 'prop-types'

function Header({ config, siteTitle, menuLinks }) {
  const { author, description, social } = config;

  return (
    <div>
      <nav style={{ border: "1px solid #e0e6ed", background: "#fff", marginBottom: "50px", position: 'fixed', width: '100%', zIndex: '5'  }}>
            <ul style={{ display: "flex", flex: 1, fontSize: '1.6em'}}>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `Black` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
      </nav>
      <Container>
      {/* <div>
        {siteTitle}
      </div> */}
      
      <Wrapper>
        <div style={{transform: 'translateY(50%)', marginBottom: '150px'}}>
          {userConfig.showHeaderImage && (
            <HeaderImage/>
          )}
          <H1><Link to="/">{author}</Link></H1>
          <P>{description}</P>
          {social &&
            <Social
              // website={social.website}
              github={social.github}
              twitter={social.twitter}
              linkedin={social.linkedin}
            />
          }
        </div>
        
      </Wrapper>
    </Container> 
    </div>
    
  );
}

export default Header;