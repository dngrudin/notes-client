import { notesApiClient as api } from 'lib/api';
import { useMutation, useQuery, useQueryClient } from 'react-query';

interface UpdateNoteProp {
  title: string
  text: string
}

export function useNotes() {
  return useQuery(
    'notes',
    () => api.getNotes()
  );
}

export function useNote(id: string) {
  return useQuery(
    ['note', id],
    () => api.getNote(id)
  );
}

export function useUpdateNote(id: string) {
  const client = useQueryClient();
  return useMutation(
    (payload: UpdateNoteProp) =>
      api.updateNote(id, { ...payload }),
    {
      onSuccess: () =>
        client.invalidateQueries(['note', id])
    }
  );
}