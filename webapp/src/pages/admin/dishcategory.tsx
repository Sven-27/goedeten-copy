import Layout from "components/admin/layout/Layout";
import CategoryDashboard from "components/admin/dishCategory/CategoryDashboard"

const Home = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Locaties Admin"
      ogImage=""
      url=""
      >
      <CategoryDashboard/>
    </Layout>
  );
};

export default Home;
