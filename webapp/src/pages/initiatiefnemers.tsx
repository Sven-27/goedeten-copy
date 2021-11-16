import Layout from "components/customer/layout/Layout";
import InitiatiefnemersPage from "components/customer/initiatiefnemers/Initiatiefnemers";

const Initiatiefnemers = () => {
	return (
		<Layout
			title="Initiatiefnemers"
			description="Initiatiefnemers: Jitske & Claudia"
			ogImage=""
			url=""
			showHeader={false}
      showFooter={ true }
		>
			<InitiatiefnemersPage />
		</Layout>
	);
};

export default Initiatiefnemers;
