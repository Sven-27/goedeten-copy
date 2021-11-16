import Layout from "components/customer/layout/Layout";
import FAQpage from "components/customer/faq/FAQ";

const FAQPage = () => {
	return (
		<Layout
			title="Veelgestelde vragen"
			description="Goed Eten: veelgestelde vragen"
			ogImage=""
			url=""
			showHeader={false}
      showFooter={ true }
		>
			<FAQpage />
		</Layout>
	);
};

export default FAQPage;
