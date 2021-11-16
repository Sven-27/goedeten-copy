import Layout from "components/admin/layout/Layout";
import ReportsDashboard from "components/admin/reports/ReportsDashboard";


const Home = () => {
  return (
    <Layout
      title="Goed Eten"
      description="Goed Eten:Planing Admin"
      ogImage=""
      url=""
    >
      <ReportsDashboard />
    </Layout>
  );
};

export default Home;
