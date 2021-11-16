import Layout from "components/customer/layout/Layout";
import LokaalPage from "components/customer/pijlers/Lokaal";

const Lokaal = () => {
  return (
    <Layout
    title="Goed Eten: Lokaal"
			description="Lokaal"
			ogImage=""
			url=""
			showHeader={false}
      showFooter={ true }
      >
      <LokaalPage />
    </Layout>
  )
}

export default Lokaal
