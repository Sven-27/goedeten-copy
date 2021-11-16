import Layout from "components/admin/layout/Layout";
import AllergenDashboard from "components/admin/allergen/AllergenDashboard"
import dynamic from "next/dynamic";

//const Layout = dynamic(() => import('components/admin/layout/Layout'), { ssr: false })
const Allergen = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Locaties Admin"
      ogImage=""
      url=""
      >
      <AllergenDashboard/>
    </Layout>
  );
};

export default Allergen;
