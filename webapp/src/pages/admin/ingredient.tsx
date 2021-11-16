import Layout from "components/admin/layout/Layout";
import IngredientDashboard from "components/admin/ingredient/IngredientDashboard"

const Home = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Locaties Admin"
      ogImage=""
      url=""
      >
      <IngredientDashboard/>
    </Layout>
  );
};

export default Home;
