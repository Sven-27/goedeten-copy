import Layout from "components/customer/layout/Layout";
import CooperatieDHPage from "components/customer/cooperatie/CooperatieDH";

const CooperatieDH = () => {
	return (
		<Layout
			title="CooperatieDH"
			description="Cooperatie Den Haag"
			ogImage=""
			url=""
			showHeader={false}
      showFooter={ true }
		>
			<CooperatieDHPage />
		</Layout>
	);
};

export default CooperatieDH;
