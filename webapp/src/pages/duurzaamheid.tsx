import Layout from "components/customer/layout/Layout";
import Duurzaamheidpage from "components/customer/duurzaamheid/Duurzaamheid";

const Duurzaamheid = () => {
	return (
		<Layout
			// type your page title and page description.
			title="Goed Eten: Duurzaamheid"
			description="Duurzaamheid"
			ogImage=""
			url=""
			showHeader={false}
      showFooter={ true }
		>
			<Duurzaamheidpage />
		</Layout>
	);
};

export default Duurzaamheid;
