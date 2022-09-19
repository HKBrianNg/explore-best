import { createContext, useContext, useState } from 'react'

const appContext = createContext()

export const AppContextProvider = ({ children }) => {
    const [isReady, setIsReady] = useState(false)
    const [isAdmin, setIsAdmin] = useState(true)
    const [isEdit, setIsEdit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [sysMessage, setSysMessage] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("IT")
    const [selectedSubCategory, setSelectedSubCategory] = useState("AppService")
    const [searchText, setSearchText] = useState('')

    return (
        <appContext.Provider value={{
            isReady, setIsReady,
            isAdmin, setIsAdmin,
            isEdit, setIsEdit,
            isLoading, setIsLoading,
            sysMessage, setSysMessage,
            selectedCategory, setSelectedCategory,
            selectedSubCategory, setSelectedSubCategory,
            searchText, setSearchText
        }}>
            {children}
        </appContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(appContext)
}