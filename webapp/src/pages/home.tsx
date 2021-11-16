import Layout from "components/customer/layout/Layout";
import dynamic from "next/dynamic"
// import HomePage from "components/customer/home/Home"
const HomePage = dynamic(() => import("components/customer/home/Home"), {ssr: false});

const Home = () => {

  return (
    <Layout 
      title="Goed Eten"
      description="Goed Eten: Home"
      ogImage=""
      url=""
      showHeader={true}
      showFooter={ true }
      >
      <HomePage/>
    </Layout>

  );
};

export default Home;
