import Layout from "components/customer/layout/Layout";
// import Dishes from "components/customer/dish/Dish"
import dynamic from "next/dynamic"
const Dishes = dynamic(() => import("components/customer/dish/Dish"), {ssr: false});

const DishesPage = () => {
  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Gerechten"
      ogImage=""
      url=""
      showHeader={true}
      showFooter={ true }
      >
      <Dishes/>
    </Layout>

  );
};

export default DishesPage;
