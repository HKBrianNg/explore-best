import { useState, useContext, createContext } from 'react'
import axios from 'axios'

const videoContext = createContext()

export const VideoContextProvider = ({ children }) => {
    const [videos, setVideos] = useState([])

    const url = "https://learning-bn-api.herokuapp.com"

    const getVideoAPI = async (id) => {
        try {
            const response = await axios.get(`${url}/video/${id}`)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }

    const getVideosAPI = async () => {
        try {
            const response = await axios.get(`${url}/video`)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }


    return (
        <videoContext.Provider value={{ videos, setVideos, getVideoAPI, getVideosAPI }}>
            {children}
        </videoContext.Provider>
    )
}

export const useVideoContext = () => {
    return (
        useContext(videoContext)
    )
}