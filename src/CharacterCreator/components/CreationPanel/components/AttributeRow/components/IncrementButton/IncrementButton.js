import React from "react";
import { StyledIncrementButton } from "./increment-button.styles";

export default function IncrementButton({
	isIncrease,
	attributeValue,
	setAttributeValue,
}) {
	const increment = () => {
		isIncrease
			? setAttributeValue(attributeValue + 1)
			: setAttributeValue(attributeValue - 1);
	};

	return (
		<StyledIncrementButton>
			<button onClick={() => increment()}>
				{isIncrease ? "+" : "-"}
			</button>
		</StyledIncrementButton>
	);
}
