import Layout from "components/admin/layout/Layout";
import LocationDashboard from "components/admin/location/LocationDashboard"

const Home = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Locaties Admin"
      ogImage=""
      url=""
      >
      <LocationDashboard/>
    </Layout>
  );
};

export default Home;
