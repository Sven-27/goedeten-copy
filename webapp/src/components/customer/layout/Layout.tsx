import styles from "styles/customer/layout/Layout.module.scss";
import Head from "next/head";
import dynamic from 'next/dynamic'
import loadable from "@loadable/component";
const Feedback = loadable(() => import("feeder-react-feedback/dist/Feedback"));

const Header = dynamic(() => import("./Header"), { ssr: false })
const Footer = dynamic(() => import("./Footer"), { ssr: false })

type LayoutProps = {
  children: React.ReactNode,
  title: string,
  description: string,
  ogImage: string,
  url: string,
  showHeader?:boolean,
  showFooter?:boolean
}

const Layout = ({ children, title, description, ogImage, url, showHeader, showFooter }: LayoutProps) => {
  // website Url
const pageUrl =
    "https://www.goed-eten.nl";
  
  // when you share this page on facebook you'll see this image
  const ogImg = "https://media-exp1.licdn.com/dms/image/C5603AQEyl9tgBlRwWA/profile-displayphoto-shrink_100_100/0/1533883863357?e=1622678400&v=beta&t=9oOcWoAsPmI6e25omWmNjdNkWAQFqW8SX3O2G8e0pkE";
  return (
    <>
      <Head>
        <title>
          {title
            ? title
            : "Goed Eten"}
        </title>
        <meta
          name="description"
          key="description"
          content={
            description
              ? description
              : "Goed Eten maakt lekker, lokaal en duurzaam eten!"
          }
        />
        <meta
          property="og:title"
          content={
            title
              ? title
              : "Goed Eten"
          }
          key="og:title"
        />
        <meta property="og:url" content={url ? url : pageUrl} key="og:url" />
        <meta
          property="og:image"
          content={ogImage ? ogImage : ogImg}
          key="og:image"
        />
        <meta
          property="og:description"
          content={
            description
              ? description
              : "Goed Eten maakt lekker, lokaal en duurzaam eten!"
          }
          key="og:description"
        />
              <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/assets/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/assets/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/assets/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content={`Goed eten`}
      />
      <meta 
        name="google-site-verification" 
        content="nMFfebAOpzbtMrANf2ZhMfzJ61d8_WTeDQS3fbMglvw" 
      />
      </Head>
      <div className={styles.container}>
      <main className={styles.layout}>
      { showHeader ? <Header /> : null } 
      
       {children}
      <Feedback projectId="6123b28a385432000476a8ae" />
      </main>
      { showFooter ? <Footer /> : null }
      </div>
         </>
  );
};

export default Layout;
