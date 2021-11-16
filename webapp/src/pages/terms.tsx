import Layout from "components/customer/layout/Layout";
import Termspage from "components/customer/terms/Terms";

const Terms = () => {
    return (
        <Layout
        // type your page title and page description.
        title="Goed Eten: Terms & Conditions"
        description="Terms & Conditions"
        ogImage=""
        url=""
        showHeader={ false }
        showFooter={ true }
    >
        <Termspage />
    </Layout>
  );
};

export default Terms;