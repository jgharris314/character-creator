import React, { useState } from "react";
import { StyledCreationPanel } from "./creation-panel.styles";
import AttributeRow from "./components/AttributeRow/AttributeRow";
import ActiveAttributeSlider from "./components/ActiveAttributeSlider/ActiveAttributeSlider";

export default function CreationPanel() {
	const stats = ["STR", "DEX", "CON", "INT", "CHA", "WIS"];
	const [activeIds, setActiveIds] = useState({ values: [1, 5] });

	return (
		<StyledCreationPanel>
			<div className="AttributePanel">
				{stats.map((stat, index) => {
					return <AttributeRow id={index} key={index} name={stat} />;
				})}
				<ActiveAttributeSlider
					activeIds={activeIds}
					setActiveIds={setActiveIds}
				/>
			</div>
		</StyledCreationPanel>
	);
}
