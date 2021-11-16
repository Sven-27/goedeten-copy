import Layout from "components/admin/layout/Layout";
import CustomerDashboard from "components/admin/customer/CustomerDashboard";

const Home = () => {
  return (
    <Layout
      title="Goed Eten"
      description="Goed Eten:Customer Admin"
      ogImage=""
      url=""
    >
      <CustomerDashboard />
    </Layout>
  );
};

export default Home;
