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
            console.log(error)
            return { okStatus: false, data: error.response.data.error }
        }
    }

    const createVideoAPI = async (video) => {
        try {
            const response = await axios.post(`${url}/video`, video)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }

    const deleteVideoAPI = async (id) => {
        try {
            const response = await axios.delete(`${url}/video/${id}`)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }

    const updateVideoAPI = async (video, id) => {
        try {
            const response = await axios.patch(`${url}/video/${id}`, video)
            return { okStatus: true, data: response.data }
        } catch (error) {
            return { okStatus: false, data: error.response.data.error }
        }
    }

    return (
        <videoContext.Provider value={{
            videos, setVideos,
            getVideoAPI, getVideosAPI,
            createVideoAPI, deleteVideoAPI, updateVideoAPI
        }}>
            {children}
        </videoContext.Provider>
    )
}

export const useVideoContext = () => {
    return (
        useContext(videoContext)
    )
}