import Button from "components/common/Button/Button.styled"
import { AuxiliaryPanelContainer, PanelLabel } from "./NoteAuxiliaryPanel.styled"

interface AuxiliaryPanelProps {
    onAddButtonClick: () => void;
}

export const AuxiliaryPanel = ({ onAddButtonClick }: AuxiliaryPanelProps) => {
    return (
        <AuxiliaryPanelContainer>
            <PanelLabel>Notes</PanelLabel>
            <Button $variant="primary" onClick={onAddButtonClick}>Add</Button>
        </AuxiliaryPanelContainer>
    )
}
