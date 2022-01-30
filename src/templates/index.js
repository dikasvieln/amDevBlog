import Helmet from 'react-helmet';
import React from 'react';

import userConfig from '../../config';

import Layout from './layout';

import Card from '../components/Card';
import Container from '../components/Container';
/*import Pagination from '../components/Pagination';*/
/*import Summary from '../components/Summary';*/

const IndexPage = ({ pageContext }) => {
  /*const { group, index, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();*/
  return (
    <Layout>
      <Container>
        
        <Helmet
          title={`${userConfig.title} | ${userConfig.author}`}
          htmlAttributes={{ lang: 'en' }}
        >
          <meta
            name="description"
            content={`${userConfig.title} | ${userConfig.description}`}
          />
       </Helmet>
        <Card>
        <h2> Let me introduce myself.</h2>

<p>So basically I am just Front End Developer who has the ability to transform from PSD to HTML. Here is some my latest experience:
</p>
         <ul>
            <li>Learning how to become web design in great media company.</li>
            <li>Web designing for Sound of Music Jakarta concert.</li>
            <li>Developing CMS for Marketing Communication Agency.</li>
            <li>Becoming one of a great tech team member in startup company.</li>
            <li>Now, continuing my dev life in creative agency company.</li>
          </ul>
        </Card>
    {/*
        {group.map(({ node }) => (
          <Card key={node.fields.slug}>
            <Summary
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              excerpt={node.excerpt}
              image={node.frontmatter.featuredImage}
              slug={node.fields.slug}
            />
          </Card>
        ))}
        <Pagination
          isFirst={index === 1}
          isLast={index === pageCount}
          nextUrl={nextUrl}
          previousUrl={previousUrl}
        />
        */}
      </Container>
    </Layout>
  );
};
export default IndexPage;
