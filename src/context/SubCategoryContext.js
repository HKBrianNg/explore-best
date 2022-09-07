import { createContext, useState, useContext } from 'react'
import axios from 'axios'

const subCategoryContext = createContext()

export const SubCategoryContextProvider = ({ children }) => {
    const url = "https://learning-bn-api.herokuapp.com"
    const [subCategories, setSubCategories] = useState([])


    const getSubCategoryAPI = async (id) => {
        try {
            const response = await axios.get(`${url}/topic/${id}`)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }

    const getSubCategoriesAPI = async () => {
        try {
            const response = await axios.get(`${url}/topic`)
            return { okStatus: true, data: response.data }
        } catch (error) {
            console.log(error)
            return { okStatus: false, data: error.response.data.error }
        }
    }

    const createSubCategoryAPI = async (subCategory) => {
        try {
            const response = await axios.post(`${url}/topic`, subCategory)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }

    const deleteSubCategoryAPI = async (id) => {
        try {
            const response = await axios.delete(`${url}/topic/${id}`)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }

    const updateSubCategoryAPI = async (subCategory, id) => {
        try {
            const response = await axios.patch(`${url}/topic/${id}`, subCategory)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }

    return (
        <subCategoryContext.Provider value=
            {{
                subCategories, setSubCategories,
                getSubCategoriesAPI, getSubCategoryAPI,
                createSubCategoryAPI, deleteSubCategoryAPI, updateSubCategoryAPI
            }}
        >
            {children}
        </subCategoryContext.Provider>
    )
}

export const useSubCategoryContext = () => {
    return useContext(subCategoryContext)
}