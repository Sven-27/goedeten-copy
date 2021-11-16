import React from "react";
import styles from "styles/customer/dishInfo/Portions.module.scss";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

interface PortionsProps {
	handleMinus: () => void;
	handlePlus: () => void;
	portionsValue: number;
	maxPortions: number;
	buttonMinusAccess: boolean;
	buttonPlusAccess: boolean;
}

const Portions = (props: PortionsProps) => {
	const {
		handleMinus,
		handlePlus,
		portionsValue,
		maxPortions,
		buttonMinusAccess,
		buttonPlusAccess,
	} = props;

	return (
		<div className={styles.portions}>
			<div className={styles.portions__container}>
				<div className={styles.buttons}>
					<button
						type="submit"
						disabled={buttonMinusAccess}
						onClick={handleMinus}
					>
						<RemoveCircleOutlineIcon className={styles.portionIcon} />
					</button>
					<p className={styles.input}>{portionsValue}</p>
					<button
						type="submit"
						disabled={buttonPlusAccess}
						onClick={handlePlus}
					>
						<AddCircleOutlineIcon className={styles.portionIcon} />
					</button>
				</div>
				<div className={styles.text}>
					<div className={styles.oneLeft}>
						{maxPortions - portionsValue === 1 && (
							<div className={styles.portions__extraLine}>
								Nog één portie beschikbaar
							</div>
						)}
					</div>
					<div className={styles.maxPortions}>
						{portionsValue === maxPortions && (
							<div className={styles.portions__extraLine}>De laatste portie is voor jou!</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Portions;
