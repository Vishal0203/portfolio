import React from 'react'
import App, { Container } from 'next/app'
import AppProvider from '../components/AppProvider';

class PortfolioApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </Container>
    )
  }
}

export default PortfolioApp
