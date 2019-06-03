import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from './header.module.scss';

const header = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/">Home</Link></li>
          <li><Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/about">About</Link></li>
          <li><Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/blog">Blog</Link></li>
          <li><Link className={headerStyles.navLink} activeClassName={headerStyles.activeNavLink} to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default header;