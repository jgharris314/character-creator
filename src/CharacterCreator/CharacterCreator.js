import React from "react";
import { StyledCharacterCreator } from "./character-creator.styles";
import CharacterDisplay from "./components/CharacterDisplay/CharacterDisplay";
import CreationPanel from "./components/CreationPanel/CreationPanel";
export default function CharacterCreator() {
	return (
		<StyledCharacterCreator>
			<CharacterDisplay />
			<CreationPanel />
		</StyledCharacterCreator>
	);
}
