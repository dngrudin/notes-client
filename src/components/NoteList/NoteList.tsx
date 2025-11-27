import { useEffect, useRef, useState } from "react";
import { NoteListContainer } from "../NoteList/NoteList.styled"
import { NoteListItem } from "../NoteList/NoteListItem"
import { useNotes } from "hooks/api/note"

export const NoteList = () => {
    const { data: notes } = useNotes();
    const [isScrolled, setIsScrolled] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const el = containerRef.current;
            if (el) {
                setIsScrolled(el.scrollTop > 0);
            }
        };

        const el = containerRef.current;
        if (!el) return;

        el.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            el.removeEventListener('scroll', handleScroll);
        };
    }, [containerRef]);

    return (
        <NoteListContainer ref={containerRef} $scrolled={isScrolled}>
            {notes?.map((note, i) => (
                <NoteListItem id={note.id} text={note.title} index={i} key={note.id} />
            ))}
        </NoteListContainer>
    )
}
