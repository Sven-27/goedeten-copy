import Layout from "components/admin/layout/Layout";
import UserDashboard from "components/admin/user/UserDashboard"

const Home = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten:Planing Admin"
      ogImage=""
      url=""
      >
      <UserDashboard/>
    </Layout>
  );
};

export default Home;
