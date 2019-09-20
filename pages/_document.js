import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />),
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-148403885-1">
          </script>
          <script dangerouslySetInnerHTML={
            {
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments)}
                gtag("js", new Date());
                gtag("config", "UA-148403885-1");
              `,
            }
          }>
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument;
