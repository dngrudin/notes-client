import React, { createContext , useContext, useReducer } from "react"

export interface AppState {
    selectedId: string | null
}

interface AppStateContextProps {
    state: AppState
    dispatch: React.Dispatch<any>
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)

export const useAppState = () => {
    return useContext(AppStateContext)
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(appStateReducer, { selectedId: null })

    return (
        <AppStateContext.Provider value={{ state, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}

type Action =
    | {
        type: "SELECT_NOTE"
        payload: string
    }

const appStateReducer = (state: AppState, action: Action) : AppState => {
    switch (action.type) {
        case "SELECT_NOTE": {   
            return {
                ...state,
                selectedId: action.payload
            }
        }
        default: {
            return state;
        }
    }
}