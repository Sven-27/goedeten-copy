import Layout from "components/customer/layout/Layout";
// import DeliveryDetails from "components/customer/deliverydetails/DeliveryDetails";
import dynamic from "next/dynamic"
const DeliveryDetails = dynamic(() => import("components/customer/deliverydetails/DeliveryDetails"), {ssr: false});

const DeliveryDetailsPage = () => {
	return (
		<Layout
			title="Goed Eten"
			description="Goed Eten: Delivery details"
			ogImage=""
			url=""
			showHeader={true}
      showFooter={ true }
		>
			<DeliveryDetails />
		</Layout>
	);
};

export default DeliveryDetailsPage;
