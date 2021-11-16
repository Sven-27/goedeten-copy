import Layout from "components/customer/layout/Layout";
import dynamic from "next/dynamic"
// import Payment from "components/customer/payment/Payment";
const PaymentPage = dynamic(() => import("components/customer/payment/Payment"), {ssr: false});

const Payment = () => {
	return (
		<Layout
			title="Goed Eten"
			description="Goed Eten: Payment"
			ogImage=""
			url=""
			showHeader={true}
    	    showFooter={true}
		>
			<PaymentPage />
		</Layout>
	);
};

export default Payment;
