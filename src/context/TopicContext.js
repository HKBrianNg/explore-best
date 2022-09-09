import { createContext, useContext, useState } from 'react'
import axios from 'axios'


const topicContext = createContext()
const url = "https://learning-bn-api.herokuapp.com"

export const TopicContextProvider = ({ children }) => {
    const [topics, setTopics] = useState([])

    const getTopicsAPI = async () => {
        try {
            const response = await axios.get(`${url}/topic`)
            return { okStatus: true, data: response.data }
        } catch (error) {
            console.log(error)
            return { okStatus: false, data: error.response.data.error }
        }
    }

    return (
        <topicContext.Provider value={{
            topics, setTopics, getTopicsAPI
        }}>
            {children}
        </topicContext.Provider>
    )
}

export const useTopicContext = () => {
    return (
        useContext(topicContext)
    )
}