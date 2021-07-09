import styled from "styled-components";

export const StyledCreationPanel = styled.div`
	position: relative;
	margin: 0 auto;
	width: 95%;
	height: 55%;
	background-color: rgba(9, 9, 51);
	border-radius: 5px;
	display: flex;
	flex-direction: row;
	color: rgba(16, 16, 86);

	.AttributePanel {
		/* margin-top: 5%; */
		padding: 0.25%;
		height: 95%;
		/* background-color: rgba(9, 9, 51) */
		width: 95%;
		position: relative;
		margin: 0 auto;
		border-radius: 5px;
		/* overflow: scroll; */
	}

	.active {
		background-color: red;
	}
`;
