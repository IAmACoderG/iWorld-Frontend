import { useContext, createContext } from "react";

export const userDataContext = createContext({
    notes: [],
    addNote: async () => { },
    allNote: async () => { },
    updateNote: async () => { },
    deleteNote: async () => { },
})

export function GlobalAccess() {
    const context = useContext(userDataContext)
    return context;
}

export const UserDataProvider = userDataContext.Provider;