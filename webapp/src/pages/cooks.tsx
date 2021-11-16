import Layout from "components/customer/layout/Layout";
import Cooks from "components/customer/cook/Cooks"

const CooksPage = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Koks"
      ogImage=""
      url=""
      showHeader={true}
      showFooter={ true }
      >        
      <Cooks/>
    </Layout>
  );
};

export default CooksPage;
