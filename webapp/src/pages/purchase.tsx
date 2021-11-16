// import Layout from "components/customer/layout/Layout";
import Layout from 'components/customer/layout/Layout'
import dynamic from "next/dynamic"
// import PurchasePage from "components/customer/purchase/Purchase";
const PurchasePage = dynamic(() => import("components/customer/purchase/Purchase"), {ssr: false});

const PurchasingScreenPage = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Home"
      ogImage=""
      url=""
      showHeader={true}
      showFooter={ true }
      >
      <PurchasePage />
    </Layout>

  );
};

export default PurchasingScreenPage;
