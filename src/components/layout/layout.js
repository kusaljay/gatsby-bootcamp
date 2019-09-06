import React from 'react';
//import Aux from '../../hoc/Auxiliary'
import Header from '../header/header';
import Footer from '../footer/footer';
import '../../styles/index.scss';
import layoutStyles from './layout.module.scss';

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
