import Layout from "components/customer/layout/Layout";
import CooksStatic from "components/customer/cooksStatic/CooksStatic";

const CooksStaticPage = () => {
  return (
    <Layout 
      title="Cooks Static"
      description="Goed Eten: Koks (Static)"
      ogImage=""
      url=""
      showHeader={ false }
      showFooter={ true }
      >        
      <CooksStatic/>
    </Layout>
  );
};

export default CooksStaticPage;