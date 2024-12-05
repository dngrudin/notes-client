import axios from 'axios';
import Note from 'types/Note';
import NoteChange from 'types/NoteChange';

const apiClient = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_BASE_URL}/api`,
    headers: {
      "Content-type": "application/json",
    },
  });

const getNotes = async () => {
  const response = await apiClient.get<Note[]>("/notes");
  return response.data;
}

const getNote = async (id: string) => {
  const response = await apiClient.get<Note>(`/notes/${id}`);
  return response.data;
}

const updateNote = async (id: string, body: NoteChange) => {
  const response = await apiClient.put(`/notes/${id}`, body);
  console.info(response.status)
}

const createNote = async (body: Note) => {
  const response = await apiClient.post(`/notes`, body);
  console.info(response.status)
}

export const notesApiClient = {
  getNotes,
  getNote,
  updateNote,
  createNote,
}

