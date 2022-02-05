import Document, { Html, Head, Main, NextScript } from "next/document";
import { renderStatic } from "shared/renderer";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const page = await ctx.renderPage();
    const { css, ids } = await renderStatic(page.html);
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style data-emotion={`css ${ids.join(" ")}`} dangerouslySetInnerHTML={{ __html: css }} />
        </>
      ),
    };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link href='/fonts/segoe-ui/segoe-ui.ttf' rel='preload' as='font' crossOrigin='anonymous' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
