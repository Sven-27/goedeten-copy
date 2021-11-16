import Layout from "components/customer/layout/Layout";
import NoSupply from "components/customer/nosupply/NoSupply";

const NoSupplyPage = () => {
	return (
		<Layout
			title="Te weinig voorraad"
			description="Goed Eten: te weinig voorraad"
			ogImage=""
			url=""
			showHeader={true}
      showFooter={ true }
		>
			<NoSupply />
		</Layout>
	);
};

export default NoSupplyPage;
