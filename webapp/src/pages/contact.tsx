import Layout from "components/customer/layout/Layout";
import Contactpage from "components/customer/contact/Contact";

const Contact = () => {
	return (
		<Layout
			// type your page title and page description.
			title="Goed Eten: Contact"
			description="Contact"
			ogImage=""
			url=""
			showHeader={false}
      showFooter={ true }
		>
			<Contactpage />
		</Layout>
	);
};

export default Contact;
