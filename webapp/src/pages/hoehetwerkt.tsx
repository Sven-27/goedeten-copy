import Layout from "components/customer/layout/Layout";
import HoeHetWerkt from "components/hoehetwerkt/HoeHetWerkt";

const Hoehetwerkt = () => {

  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Hoe het werkt"
      ogImage=""
      url=""
      showHeader={ false }
      showFooter={ true }
      >
      <HoeHetWerkt/>
    </Layout>

  );
};

export default Hoehetwerkt;
