import Layout from "components/admin/layout/Layout";
import CuisineDashboard from "components/admin/cuisine/CuisineDashboard"

const Home = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Keuken Admin"
      ogImage=""
      url=""
      >
      <CuisineDashboard/>
    </Layout>
  );
};

export default Home;
