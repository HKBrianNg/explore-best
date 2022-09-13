import axios from 'axios'
import { createContext, useContext, useState } from 'react'
import { defaultBodyParts, defaultTargetMuscles, defaultEquipments, defaultBodyExercises } from '../data/Fitness/fitness.js'

const fitnessContext = createContext()


export const FitnessContextProvider = ({ children }) => {
  const [bodyParts, setBodyParts] = useState(defaultBodyParts)
  const [targetMuscles, setTargetMuscles] = useState(defaultTargetMuscles)
  const [equipments, setEquipments] = useState(defaultEquipments)
  const [bodyExercises, setBodyExercises] = useState(defaultBodyExercises)


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

  return (
    <fitnessContext.Provider value={{
      bodyParts, setBodyParts,
      targetMuscles, setTargetMuscles,
      equipments, setEquipments,
      bodyExercises, setBodyExercises,
      getbodyPartsAPI, getTargetMusclesAPI, getEquipmentsAPI, getBodyExercisesAPI
    }}>
      {children}
    </fitnessContext.Provider>
  )
}

export const useFitnessContext = () => {
  return useContext(fitnessContext)
}