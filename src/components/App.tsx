import { QueryClient, QueryClientProvider } from "react-query";
import { AppContainer, LeftPanelContainer } from "components/App.styled"
import { NoteList } from "components/Note/NoteList"
import { Note } from "components/Note/Note";
import { useAppState } from "components/contexts/AppStateContext";
import { EmptyNoteContainer } from "components/Note/Note.styled";
import Button from "./common/Button/Button.styled";
import { useState } from "react";
import { NewNoteModal } from "./Note/NewNoteModal";

const queryClient = new QueryClient({
  defaultOptions: {
    queries : {
      onError(error) {
        alert(error)
      }
    },
    mutations: {
      onError(error) {
        alert(error)
      }
    }
  }
});

const App = () => {
  const { state } = useAppState()
  const [ isOpenNewNote, setIsOpenNewNote ] = useState(false);
  
  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <LeftPanelContainer>
          <Button buttonType="do" onClick={ () => setIsOpenNewNote(true) }>Add note</Button>
          <NoteList/>
        </LeftPanelContainer>
        { state.selectedId ? <Note key={state.selectedId} id={state.selectedId}/> : <EmptyNoteContainer>Select note</EmptyNoteContainer> }
        { isOpenNewNote && <NewNoteModal onClosed={ () => setIsOpenNewNote(false) }/> }
      </AppContainer>
    </QueryClientProvider>
  )
}

export default App;
