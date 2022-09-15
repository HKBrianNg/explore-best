import axios from 'axios'
import { createContext, useContext, useState } from 'react'
import { defaultBodyParts, defaultTargetMuscles, defaultEquipments, defaultBodyExercises } from '../data/Fitness/fitness.js'

const fitnessContext = createContext()

export const FitnessContextProvider = ({ children }) => {
  const [bodyParts, setBodyParts] = useState(defaultBodyParts)
  const [targetMuscles, setTargetMuscles] = useState(defaultTargetMuscles)
  const [equipments, setEquipments] = useState(defaultEquipments)
  const [bodyExercises, setBodyExercises] = useState(defaultBodyExercises)
  const [selectedBodyPart, setSelectedBodyPart] = useState('back')
  const [selectedTargetMuscle, setSelectedTargetMuscle] = useState('lats')
  const [selectedEquipment, setSelectedEquipment] = useState('cable')
  const [selectedBodyExercise, setSelectedBodyExercise] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  // const [bodyInfo, setBodyInfo] = useState({ weight: '', height: '' })
  const [bmiInfo, setBmiInfo] = useState({ bmi: 0, health: "", healthy_bmi_range: "" })
  const [tdeeInfo, setTdeeInfo] = useState({ tdee: 0.0 })

  const getbodyPartsAPI = async () => {
    const URL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
    try {
      const { data } = await axios.get(URL, {
        headers: {
          'X-RapidAPI-Key': 'd222430dc4msh3216a8da5df0133p10cb60jsna80cb3930ee5',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      })
      setBodyParts(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const getTargetMusclesAPI = async () => {
    const URL = 'https://exercisedb.p.rapidapi.com/exercises/targetList'

    try {
      const { data } = await axios.get(URL, {
        headers: {
          'X-RapidAPI-Key': 'd222430dc4msh3216a8da5df0133p10cb60jsna80cb3930ee5',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      })
      setTargetMuscles(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const getEquipmentsAPI = async () => {
    const URL = 'https://exercisedb.p.rapidapi.com/exercises/equipmentList'

    try {
      const { data } = await axios.get(URL, {
        headers: {
          'X-RapidAPI-Key': 'd222430dc4msh3216a8da5df0133p10cb60jsna80cb3930ee5',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      })
      setEquipments(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const getBodyExercisesAPI = async () => {
    const URL = 'https://exercisedb.p.rapidapi.com/exercises'
    try {
      const { data } = await axios.get(URL, {
        headers: {
          'X-RapidAPI-Key': 'd222430dc4msh3216a8da5df0133p10cb60jsna80cb3930ee5',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      })
      setBodyExercises(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const getSelectedBodyExerciseAPI = async (id) => {
    const URL = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`
    try {
      const { data } = await axios.get(URL, {
        headers: {
          'X-RapidAPI-Key': 'd222430dc4msh3216a8da5df0133p10cb60jsna80cb3930ee5',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      })
      setSelectedBodyExercise(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  const getYouTubeVideoAPI = async (name) => {
    const URL = 'https://youtube-search-and-download.p.rapidapi.com/search'
    try {
      const { data } = await axios.get(URL, {
        params: {
          query: `${name}`,
          type: 'v',
          sort: 'v'
        },
        headers: {
          'X-RapidAPI-Key': 'd222430dc4msh3216a8da5df0133p10cb60jsna80cb3930ee5',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      })
      setExerciseVideos(data.contents)
      return data.contents
    } catch (error) {
      console.log(error)
    }
  }

  const getBodyMassIndexAPI = async (bodyInfo) => {
    const URL = 'https://mega-fitness-calculator1.p.rapidapi.com/bmi'
    try {
      const { data } = await axios.get(URL, {
        params: bodyInfo,
        headers: {
          'X-RapidAPI-Key': 'd222430dc4msh3216a8da5df0133p10cb60jsna80cb3930ee5',
          'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
        }
      })
      if (data.info) {
        return { okStatus: true, data: data.info }
      }
      if (data.err) {
        return { okStatus: false, data: data.err }
      }
    } catch (error) {
      console.log(error)
      return { okStatus: false, data: error }
    }
  }

  const getTotalDailyEnergyExpenditureAPI = async (bodyInfo) => {
    const URL = 'https://mega-fitness-calculator1.p.rapidapi.com/tdee'
    try {
      console.log("bodyInfo", bodyInfo)
      const { data } = await axios.get(URL, {
        params: bodyInfo,
        headers: {
          'X-RapidAPI-Key': 'd222430dc4msh3216a8da5df0133p10cb60jsna80cb3930ee5',
          'X-RapidAPI-Host': 'mega-fitness-calculator1.p.rapidapi.com'
        }
      })
      if (data.info) {
        return { okStatus: true, data: data.info }
      }
      if (data.err) {
        return { okStatus: false, data: data.err }
      }
    } catch (error) {
      console.log(error)
      return { okStatus: false, data: error }
    }
  }

  return (
    <fitnessContext.Provider value={{
      selectedBodyPart, setSelectedBodyPart,
      selectedTargetMuscle, setSelectedTargetMuscle,
      selectedEquipment, setSelectedEquipment,
      selectedBodyExercise, setSelectedBodyExercise,
      bodyParts, setBodyParts,
      targetMuscles, setTargetMuscles,
      equipments, setEquipments,
      bodyExercises, setBodyExercises,
      exerciseVideos, setExerciseVideos,
      // bodyInfo, setBodyInfo,
      bmiInfo, setBmiInfo,
      tdeeInfo, setTdeeInfo,
      getbodyPartsAPI, getTargetMusclesAPI, getEquipmentsAPI, getBodyExercisesAPI, getSelectedBodyExerciseAPI,
      getYouTubeVideoAPI, getBodyMassIndexAPI, getTotalDailyEnergyExpenditureAPI,
    }}>
      {children}
    </fitnessContext.Provider>
  )
}

export const useFitnessContext = () => {
  return useContext(fitnessContext)
}