/* eslint-disable max-len */
import Head from "next/head";

type MetaProps = {
  title?: string;
  subtitle?: string;
  keywords?: string;
  description?: string;
  currentURL?: string;
  siteName?: string;
  urlImg?: string;
};

const Meta = ({
  title = "Terminal - Faris Nur Adlin",
  subtitle = "Home",
  keywords = "Terminal - Faris Nur Adlin",
  description = "Terminal - Faris Nur Adlin",
  currentURL = "https://tokopedia-technical-test-faris.vercel.app",
  siteName = "Terminal - Faris Nur Adlin",
  urlImg = "https://res.cloudinary.com/https-farisadlin-com/image/upload/v1643550018/tokopedia-test/meta/tokopedia-test_madp6f.png",
}: MetaProps) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@shifairs' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={urlImg} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta property='og:url' content={currentURL} key='ogurl' />
      <meta property='og:image' content={urlImg} key='ogimage' itemProp='image' />
      <meta property='og:image:type' content='image/jpeg' />
      <meta property='og:site_name' content={siteName} key='ogsitename' />
      <meta property='og:title' content={title} key='ogtitle' />
      <meta property='og:description' content={description} key='ogdesc' />
      <meta property='og:type' content='website' />
      <meta property='og:updated_time' content='1440432930' />
      <meta property='og:image:width' content='300' />
      <meta property='og:image:height' content='300' />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{`${title}`}</title>
    </Head>
  );
};

export default Meta;
