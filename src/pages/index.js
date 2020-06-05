import React from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello there!</h1>
      <h2>I'm Kusal, a front-end developer living in Melbourne.</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage;