import Layout from "components/customer/layout/Layout";
import Processing from "components/customer/processing/processing";

const ProcessingPage = () => {
	return (
		<Layout
			title="Betaling wordt verwerkt"
			description="Goed Eten: betaling wordt verwerkt"
			ogImage=""
			url=""
			showHeader={false}
      		showFooter={ false }
		>
			<Processing />
		</Layout>
	);
};

export default ProcessingPage;
