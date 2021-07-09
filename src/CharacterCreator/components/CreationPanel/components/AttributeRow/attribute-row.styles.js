import styled from "styled-components";

export const StyledAttributeRow = styled.div`
	position: relative;
	margin: 0 auto;
	width: 90%;
	background-color: rgba(16, 16, 86);
	height: 2rem;
	border-radius: 5px;
	margin-top: 5px;
	margin-bottom: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	color: rgba(199, 144, 14);
	.Attribute {
		&-name {
			display: flex;
			flex-direction: column;
			padding-top: 5px;
		}

		&-value {
			display: flex;
			flex-direction: column;
			padding-top: 3px;
			font-size: 20px;
		}

		&-buttons {
			display: flex;
			flex-direction: row;
			top: 0;
			align-items: center;
		}
	}

	.active {
		background-color: red;
	}
`;
