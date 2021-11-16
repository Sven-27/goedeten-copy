import Layout from "components/customer/layout/Layout";
import SuccessPage from "components/customer/status/Succes";

const Succes = () => {
	return (
		<Layout
			title="Payment successfull"
			description=""
			ogImage=""
			url=""
			showHeader={ false }
      showFooter={ false }
		>
			<SuccessPage />
		</Layout>
	);
};

export default Succes;