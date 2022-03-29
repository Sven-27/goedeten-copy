import Layout from "components/customer/layout/Layout";
import SeizoenPage from "components/customer/pijlers/Gezondeaarde";

const Seizoen = () => {
  return (
    <Layout
    title="Goed Eten: Gezonde aarde"
			description="Seizoensgebonden"
			ogImage=""
			url=""
			showHeader={false}
      showFooter={ true }
      >
      <SeizoenPage />
    </Layout>
  )
}

export default Seizoen
