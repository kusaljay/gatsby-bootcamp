import React from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Great Gatsby Bootcamp</h1>
      <p>This will be the home page</p>
      <p>Need a Dev? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage;