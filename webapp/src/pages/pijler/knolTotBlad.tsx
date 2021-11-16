import Layout from "components/customer/layout/Layout";
import KnolTotBladPage from "components/customer/pijlers/KnolTotBlad";

const KnolTotBlad = () => {
  return (
    <Layout
    title="Goed Eten: Knol Tot Blad"
			description="Knol Tot Blad"
			ogImage=""
			url=""
			showHeader={false}
      showFooter={ true }
      >
      <KnolTotBladPage />
    </Layout>
  )
}

export default KnolTotBlad
