import { createContext, useContext, useState } from 'react'

const appContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState('IT')
    const [selectedSubCategory, setSelectedSubCategory] = useState('APPSERVICE')

    return (
        <appContext.Provider value={{
            selectedCategory, setSelectedCategory,
            selectedSubCategory, setSelectedSubCategory
        }}>
            {children}
        </appContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(appContext)
}