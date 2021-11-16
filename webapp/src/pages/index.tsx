import Layout from "components/customer/layout/Layout";
import dynamic from "next/dynamic"
// import ZipcodePage from "components/customer/zipcode/Zipcode"

const ZipcodePage = dynamic(() => import("components/customer/zipcode/Zipcode"), { ssr: false })

const Home = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Postcode check"
      ogImage=""
      url=""
      showHeader = {false}
      showFooter={ true }
      >
      <ZipcodePage/>
    </Layout>

  );
};

export default Home;
