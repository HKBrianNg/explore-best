import { createContext, useContext, useState } from 'react'

const appContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [isReady, setIsReady] = useState(false)
    const [isAdmin, setIsAdmin] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState("IT")
    const [selectedSubCategory, setSelectedSubCategory] = useState("AppService")

    return (
        <appContext.Provider value={{
            isReady, setIsReady,
            isAdmin, setIsAdmin,
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