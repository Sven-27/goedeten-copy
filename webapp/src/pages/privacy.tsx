import Layout from "components/customer/layout/Layout";
import PrivacyPage from "components/customer/privacy/Privacy";

const Privacy = () => {
	return (
		<Layout
			title="Privacy Verklaring"
			description="Privacy Verklaring"
			ogImage=""
			url=""
			showHeader={false}
      showFooter={ true }
		>
			<PrivacyPage />
		</Layout>
	);
};

export default Privacy;