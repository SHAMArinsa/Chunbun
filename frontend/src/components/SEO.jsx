import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  keywords,
}) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content={keywords}
      />

      <meta
        name="author"
        content="ARINSA AI MINDS"
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content="https://arinsaaiminds.com"
      />

      <meta
        property="og:image"
        content="https://arinsaaiminds.com/logo.png"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />
    </Helmet>
  );
}