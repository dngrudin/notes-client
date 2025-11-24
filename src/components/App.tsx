import { QueryClient, QueryClientProvider } from "react-query";
import { AppContainer, LeftPanelContainer, Layout } from "components/App.styled"
import { NoteList } from "components/NoteList/NoteList"
import { Note } from "components/Note/Note";
import { useAppState } from "components/contexts/AppStateContext";
import { EmptyNoteContainer } from "components/Note/Note.styled";
import { useState } from "react";
import { NewNoteModal } from "./Note/NewNoteModal";
import { ThemeProvider } from "styled-components";
import { useThemeMode } from "./contexts/ThemeModeContext";
import { darkTheme, theme } from "theme/theme";
import GlobalCSS from 'components/globalCss';
import { Navbar } from "./NavBar/NavBar";
import { AuxiliaryPanel } from "./NoteAuxiliaryPanel/NoteAuxiliaryPanel";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
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
  const [isOpenNewNote, setIsOpenNewNote] = useState(false);
  const { isDarkMode } = useThemeMode();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
        <GlobalCSS />
        <Layout>
          <Navbar />
          <AppContainer>
            <LeftPanelContainer>
              <AuxiliaryPanel onAddButtonClick={() => setIsOpenNewNote(true)} />
              <NoteList />
            </LeftPanelContainer>
            {state.selectedId ? <Note key={state.selectedId} id={state.selectedId} /> : <EmptyNoteContainer>Select note</EmptyNoteContainer>}
            {isOpenNewNote && <NewNoteModal onClosed={() => setIsOpenNewNote(false)} />}
          </AppContainer>
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App;
