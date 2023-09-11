// components/LinkPreview.js
import Head from 'next/head';

const LinkPreview = ({ title, imageUrl, pageUrl, description }) => {

  return (
    <Head>
      {/* Update the title */}
      <title>{title}</title>

      <meta property="og:title" content={title} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://twitter.com/mikelogic" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={meta.imageUrl} />
  </Head>
  );
};

export default LinkPreview;
