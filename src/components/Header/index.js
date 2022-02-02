import React from 'react';
import userConfig from '../../../config';
//import styled from 'styled-components';
import Container from '../Container';
import HeaderImage from '../HeaderImage';
import Social from '../Social';
import H1 from '../H1';
import P from './P';
import Link from './Link';
import Wrapper from './Wrapper';

//import prop-types from 'prop-types';


function Header({ config, siteTitle, menuLinks }) {
  const { author, description, social } = config;

  return (
    <div>
      
      <Container>
      
      <Wrapper>
        <div style={{transform: 'translateY(25%)', marginBottom: '100px'}}>
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

        <div style={{marginTop: '10px'}}>
            <ul style={{ display: "flex", flex: 1, fontSize: '1.6em', justifyContent: 'center'}}>
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
        </div>
        
      </Wrapper>
    </Container> 
    </div>
    
  );
}

export default Header;
