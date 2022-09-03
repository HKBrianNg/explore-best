import { useState, useContext, createContext } from 'react'

const videoContext = createContext()

export const VideoContextProvider = ({ children }) => {
    const [videos, setVideos] = useState([])


    return (
        <videoContext.Provider value={{ videos, setVideos }}>
            {children}
        </videoContext.Provider>
    )
}

export const useVideoContext = () => {
    return (
        useContext(videoContext)
    )
}