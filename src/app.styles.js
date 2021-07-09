import styled from "styled-components";

export const StyledApp = styled.div`
	text-align: center;

	body {
		top: 0;
		background-color: rgba(9, 9, 51);
		height: 100vh;
		z-index: -1;
	}
	.App {
		&-header {
			background-color: darkgray;
		}
	}
`;
