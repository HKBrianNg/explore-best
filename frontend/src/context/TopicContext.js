import { createContext, useContext, useState } from 'react'
import axios from 'axios'
// import { defaultTopics } from '../data/Topic/topic-2022-9-26'
import { defaultTopics } from '../data/Topic/topics'

import { topicUrl as url } from '../constant'


const topicContext = createContext()
const initialTopic = {
    id: "",
    category: "",
    subCategory: "",
    title: "",
    summary: "",
    content: "",
    contentUrl: ""
}

export const TopicContextProvider = ({ children }) => {
    const [topics, setTopics] = useState(defaultTopics)
    const [topic, setTopic] = useState(initialTopic)

    const getTopicsAPI = async () => {
        try {
            const response = await axios.get(`${url}/topic`)
            return { okStatus: true, data: response.data }
        } catch (error) {
            console.log(error)
            return { okStatus: false, data: error.response.data.error }
        }
    }

    const getTopicAPI = async (id) => {
        try {
            const response = await axios.get(`${url}/topic/${id}`)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }

    const createTopicAPI = async (topic) => {
        try {
            const response = await axios.post(`${url}/topic`, topic)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }

    const deleteTopicAPI = async (id) => {
        try {
            const response = await axios.delete(`${url}/topic/${id}`)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }

    const updateTopicAPI = async (topic, id) => {
        try {
            const response = await axios.patch(`${url}/topic/${id}`, topic)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }

    return (
        <topicContext.Provider value={{
            topic, setTopic, topics, setTopics, getTopicsAPI, getTopicAPI,
            createTopicAPI, deleteTopicAPI, updateTopicAPI,
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