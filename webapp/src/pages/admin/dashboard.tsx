import Dashboard from "components/admin/dashboard/Dashboard";
import Layout from "components/admin/layout/Layout";
import React from "react";

const Home = () => {
  return (

    <Layout 
      title="Goed Eten"
      description="Goed Eten: Keuken Admin dashboard"
      ogImage=""
      url=""
      showHeader = {true}
      >
      <Dashboard/>
    </Layout>

  );
};

export default Home;
