import Layout from "components/customer/layout/Layout";
import Stichtingpage from "components/customer/stichting/Stichting";

const Stichting = () => {
	return (
		<Layout
			// type your page title and page description.
			title="Goed Eten: Stichting"
			description="Stichting"
			ogImage=""
			url=""
			showHeader={false}
      showFooter={ true }
		>
			<Stichtingpage />
		</Layout>
	);
};

export default Stichting;
