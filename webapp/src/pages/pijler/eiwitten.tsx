import Layout from "components/customer/layout/Layout";
import EiwittenPage from "components/customer/pijlers/Eiwitten";

const Eiwitten = () => {
  return (
    <Layout
    title="Goed Eten: Eiwitten"
			description="Eiwitten"
			ogImage=""
			url=""
			showHeader={false}
      showFooter={ true }
      >
      <EiwittenPage />
    </Layout>
  )
}

export default Eiwitten
