import { ButtonsWrapper } from "./Note.styled"
import { useCreateNote, } from "hooks/api/note"
import ModalWindow from "components/common/ModalWindow/ModalWindow.styled";
import Button from "components/common/Button/Button.styled";
import Input from "components/common/Input/Input";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

interface NewNoteModalProps {
    onClosed: () => void
}

export const NewNoteModal = ({ onClosed } : NewNoteModalProps) => {
    const [title, setTitle] = useState(""); 
    const createNote =  useCreateNote();

    const onCreteNote = async (title: string) => {
        try {
          await createNote.mutateAsync({id: uuidv4(), title: title, text: ""});
        } catch (e) {
          // do nothing
        }
      };

    return (
        <ModalWindow>
            <Input label="Note name" onChange={(e) => { setTitle(e.target.value)} }></Input>
            <ButtonsWrapper>
                <Button buttonType="cancel" onClick={ () => onClosed() }>Cancel</Button>
                <Button buttonType="do" disabled={ title.length === 0 } onClick={ () => { onCreteNote(title); onClosed() }}>Create</Button>
            </ButtonsWrapper>
        </ModalWindow>
    )
}