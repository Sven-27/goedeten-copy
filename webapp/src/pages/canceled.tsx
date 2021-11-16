import Layout from "components/customer/layout/Layout";
import CanceledPage from "components/customer/status/Canceled";

const Canceled = () => {
	return (
		<Layout
			title="Payment is canceled"
			description=""
			ogImage=""
			url=""
			showHeader={ false }
      showFooter={ false }
		>
			<CanceledPage />
		</Layout>
	);
};

export default Canceled;