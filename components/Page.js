import React, { Component } from 'react';

import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';
import GlobalStyles from './styles/GlobalStyles'

class Page extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <Meta />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Page;
