import Layout from "components/customer/layout/Layout";
import LokaalPage from "components/customer/pijlers/Lokaalenseizoensgebonden";

const Lokaal = () => {
  return (
    <Layout
    title="Goed Eten: Lokaal en seizoensgebonden"
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
