import Layout from "components/admin/layout/Layout";
import PlanningDashboard from "components/admin/planning/PlanningDashboard"

const Home = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten:Planing Admin"
      ogImage=""
      url=""
      >
      <PlanningDashboard/>
    </Layout>
  );
};

export default Home;
