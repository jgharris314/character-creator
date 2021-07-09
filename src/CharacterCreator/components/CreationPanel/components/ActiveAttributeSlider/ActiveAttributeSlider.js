import React, { useEffect } from "react";
import { Range } from "react-range";
import { StyledAciveAttributeSlider } from "./active-attribute-slider.styles";

export default function ActiveAttributeSlider({ activeIds, setActiveIds }) {
	const stre = document.querySelector(".STR");
	const dex = document.querySelector(".DEX");
	const con = document.querySelector(".CON");
	const intt = document.querySelector(".INT");
	const wis = document.querySelector(".WIS");
	const cha = document.querySelector(".CHA");

	const rows = [stre, dex, con, intt, wis, cha];

	const handleColors = () => {
		if (!rows[0]) return;
		for (let i = 0; i < rows.length; i++) {
			rows[i].id >= activeIds.values[0] &&
			rows[i].id <= activeIds.values[1]
				? (rows[i].style.backgroundColor = "blue")
				: (rows[i].style.backgroundColor = "red");
		}
	};

	useEffect(() => {
		handleColors();
	}, [activeIds.values]);
	return (
		<StyledAciveAttributeSlider>
			<Range
				step={1}
				min={0}
				max={5}
				values={activeIds.values}
				onChange={(values) => setActiveIds({ values })}
				renderTrack={({ props, children }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: "24px",
							width: "100%",
							backgroundColor: "#ccc",
						}}
					>
						{children}
					</div>
				)}
				renderThumb={({ props }) => (
					<div
						{...props}
						style={{
							...props.style,
							height: "46px",
							width: "25px",
							backgroundColor: "pink",
						}}
					/>
				)}
			/>
		</StyledAciveAttributeSlider>
	);
}
