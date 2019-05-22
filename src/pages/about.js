import React from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';

const aboutPage = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>Bio will appear here.</p>
      <p>Need a Dev? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default aboutPage;