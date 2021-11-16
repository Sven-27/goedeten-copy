import Layout from "components/admin/layout/Layout";
import CookDashboard from "components/admin/cook/CookDashboard"

const Home = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Keuken Admin"
      ogImage=""
      url=""
      >
      <CookDashboard/>
    </Layout>
  );
};

export default Home;
