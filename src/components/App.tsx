import { QueryClient, QueryClientProvider } from "react-query";
import { AppContainer } from "components/App.styled"
import { NoteList } from "components/Note/NoteList"
import { Note } from "components/Note/Note";
import { useAppState } from "components/contexts/AppStateContext";
import { EmptyNoteContainer } from "components/Note/Note.styled";

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

  return (
    <QueryClientProvider client={queryClient}>
      <AppContainer>
        <NoteList/>
        {state.selectedId ? <Note key={state.selectedId} id={state.selectedId}/> : <EmptyNoteContainer>Select note</EmptyNoteContainer> }
      </AppContainer>
    </QueryClientProvider>
  )
}

export default App;
