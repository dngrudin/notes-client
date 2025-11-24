import { useState } from "react";
import { NoteContainer, NoteTitle } from "./Note.styled"
import { useNote, useUpdateNote } from "hooks/api/note"
import { NoteTextEditor } from "./NoteTextEditor";
import { NoteTextViewer } from "./NoteTextViewer";

interface NoteProps {
    id: string
}

export const Note = ({ id }: NoteProps) => {
    const { data: notes } = useNote(id);
    const noteMutation = useUpdateNote(id);

    const [isEditMode, setEditMode] = useState(false);

    return (
        <NoteContainer>
            <NoteTitle>{notes?.title}</NoteTitle>
            {isEditMode ? (
                <NoteTextEditor
                    editableText={notes?.text}
                    onCancel={() => setEditMode(false)}
                    onSave={(text: string) => { noteMutation.mutateAsync({ title: (notes ? notes.title : ""), text: text }); setEditMode(false) }} />
            ) : (
                <NoteTextViewer
                    viewedText={notes?.text}
                    onEdit={() => setEditMode(true)} />
            )}

        </NoteContainer>
    )
}
