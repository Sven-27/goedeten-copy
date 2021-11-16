import Layout from "components/admin/layout/Layout";
import ZipCodeDashboard from "components/admin/delivery/ZipCodeDashboard"

const Home = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Locaties Admin"
      ogImage=""
      url=""
      >
      <ZipCodeDashboard/>
    </Layout>
  );
};

export default Home;
