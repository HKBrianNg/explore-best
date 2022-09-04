import { Chip, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'

const initialSubCategories = [
    {
        category: "IT",
        subCategory: [
            { id: "1", name: "AppService" },
            { id: "2", name: "DevOps" },
            { id: "3", name: "CICD" },
            { id: "4", name: "IDE" },
            { id: "5", name: "GitHub" },
            { id: "6", name: "Docker" },
            { id: "7", name: "React" },
            { id: "8", name: "MERN" },
            { id: "9", name: "Microservices" }
        ]
    },
    {
        category: "Fitness",
        subCategory: [
            { id: "1", name: "Fitness1" }
        ]
    },
    {
        category: "English",
        subCategory: [
            { id: "1", name: "English1" }
        ]
    }
]


function SubCategory() {
    // eslint-disable-next-line
    const [allSubCategories, setAllSubCategories] = useState(initialSubCategories)
    const { selectedCategory, selectedSubCategory, setSelectedSubCategory } = useAppContext()

    const handleClick = (name) => {
        setSelectedSubCategory(name)
    }

    useEffect(() => {
        selectedCategory === 'IT' && setSelectedSubCategory('AppService')
        selectedCategory === 'Fitness' && setSelectedSubCategory('Fitness1')
        selectedCategory === 'English' && setSelectedSubCategory('English1')
        // eslint-disable-next-line
    }, [selectedCategory])

    const data = allSubCategories.filter(
        (item) => (item.category === selectedCategory))

    return (
        <Box m={2}>
            {data[0].subCategory.map((item) => (
                <Chip
                    key={item.id}
                    onClick={() => handleClick(item.name)}
                    label={item.name}
                    variant={selectedSubCategory === item.name ? "filled" : "outlined"}
                />
            ))}
        </Box>
    )
}

export default SubCategory