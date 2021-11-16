import Layout from "components/admin/layout/Layout";
import OrdersDashboard from "components/admin/orders/OrdersDashboard"

const OrdersPage = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten:Orders Admin"
      ogImage=""
      url=""
      >
      <OrdersDashboard/>
    </Layout>
  );
};

export default OrdersPage;
