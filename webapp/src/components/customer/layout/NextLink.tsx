import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
	href: string;
	children: React.ReactNode;
	props?: Array<any>;
};

export const NextLink = ({ href, children, ...props }: Props) => {
	const router = useRouter();

	const style = {
		borderBottom: router.pathname === href ? "3px solid #2f4f4f" : undefined,
		width: "auto",
	};

	return (
		<Link href={href}>
			<a style={style} {...props}>
				{children}
			</a>
		</Link>
	);
};
