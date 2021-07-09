import React, { useState } from "react";
import { StyledAttributeRow } from "./attribute-row.styles";
import IncrementButton from "./components/IncrementButton/IncrementButton";

export default function AttributeRow({ name, id }) {
	const [attributeValue, setAttributeValue] = useState(10);

	return (
		<StyledAttributeRow className={name} id={id}>
			<div className="Attribute-name">{name}</div>
			<div className="Attribute-value">{attributeValue}</div>
			<div className="Attribute-buttons">
				<div>
					<IncrementButton
						isIncrease={false}
						attributeValue={attributeValue}
						setAttributeValue={setAttributeValue}
					/>
				</div>
				<div>
					<IncrementButton
						isIncrease={true}
						attributeValue={attributeValue}
						setAttributeValue={setAttributeValue}
					/>
				</div>
			</div>
		</StyledAttributeRow>
	);
}
