import Layout from "components/admin/layout/Layout";
import DishDashboard from "components/admin/dish/DishDashboard"

const Home = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Gerechten Admin"
      ogImage=""
      url=""
      >
      <DishDashboard/>
    </Layout>
  );
};

export default Home;
