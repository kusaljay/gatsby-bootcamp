import React from 'react';
import Layout from '../components/layout/layout';
import { graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `);

  //console.log(data);
  //console.log(data.allMarkdownRemark.edges);

  const postsList = data.allMarkdownRemark.edges.map(el => {
    return (
      <li>
        <h2>{el.node.frontmatter.title}</h2>
        <p>{el.node.frontmatter.date}</p>
      </li>
    );
  });

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {postsList}
      </ol>
    </Layout>
  )
}

export default BlogPage;