import { createContext, useContext, useState } from 'react'

const appContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState('IT')

    return (
        <appContext.Provider value={{
            selectedCategory, setSelectedCategory
        }}>
            {children}
        </appContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(appContext)
}