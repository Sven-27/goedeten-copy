import Layout from "components/customer/layout/Layout";
import GoedEtenpage from "components/customer/goedeten/GoedEten";

const GoedEtenPage = () => {
	return (
		<Layout
			title="Goed Eten"
			description="Goed Eten: meer informatie"
			ogImage=""
			url=""
			showHeader={false}
      showFooter={ true }
		>
			<GoedEtenpage />
		</Layout>
	);
};

export default GoedEtenPage;
