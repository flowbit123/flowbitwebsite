import { Head } from 'vite-react-ssg'

export default function PageSEO({ title, description, path }) {
  const url = path === '/' ? 'https://flowbit.co.za' : `https://flowbit.co.za${path}`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://flowbit.co.za/og-image.png" />
      <meta property="og:site_name" content="Flowbit" />
      <meta property="og:locale" content="en_ZA" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://flowbit.co.za/og-image.png" />
    </Head>
  )
}
