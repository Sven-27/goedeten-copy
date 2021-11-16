import Layout from "components/admin/layout/Layout";
import VatCategoryDashboard from "components/admin/vatCategory/VatCategoryDashboard";
import React from "react";


const VatCategory = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Keuken Admin"
      ogImage=""
      url=""
      >
      <VatCategoryDashboard/>
    </Layout>
  );
};

export default VatCategory;
