import { createContext, useReducer } from "react"

export const ADD_FILE = 'ADD_FILE'


export const FileContext = createContext()
export default function FilesProvider({children}) {
    const initialState = []
    const reducer = (state, action) => {
        switch(action.type) {
            case ADD_FILE: 
                state = [...state, ...action.payload]
                return state;
            default:
                return state
        }
    }
    const [files, dispatch] = useReducer(reducer, initialState);
    return (
        <FileContext.Provider value={{files, dispatch}}>
            {children}
        </FileContext.Provider>
    )
}
