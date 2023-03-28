/* eslint-disable @next/next/no-css-tags */

import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

const DESCRIPTION = `Come together around true expression to share authentic relationships`;

class AppDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link href={"https://shaka.website/"} rel={"canonical"} />
          <meta property={"title"} content={"Shaka"} />
          <meta name={"description"} content={DESCRIPTION} />
          <meta property={"author"} content={"Shaka"} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
