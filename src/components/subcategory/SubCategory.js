import { Chip, Box } from '@mui/material'
import { useEffect } from 'react'
import { useAppContext } from '../../context/AppContext'
import { allSubCategories } from '../../constant'


function SubCategory() {
    const { selectedCategory, selectedSubCategory, setSelectedSubCategory } = useAppContext()

    const handleClick = (label) => {
        setSelectedSubCategory(label)
    }

    useEffect(() => {
        selectedCategory === 'IT' && setSelectedSubCategory('AppService')
        selectedCategory === 'Fitness' && setSelectedSubCategory('Fitness1')
        selectedCategory === 'English' && setSelectedSubCategory('English1')
        selectedCategory === 'Golf' && setSelectedSubCategory('Golf1')
        selectedCategory === 'Car' && setSelectedSubCategory('Car1')
        // eslint-disable-next-line
    }, [selectedCategory])

    const data = allSubCategories.filter(
        (item) => (item.category === selectedCategory))

    return (
        <Box m={1}>
            {data[0].subCategory.map((item) => (
                <Chip
                    key={item.id}
                    onClick={() => handleClick(item.label)}
                    label={item.label}
                    variant={selectedSubCategory === item.label ? "filled" : "outlined"}
                    sx={{ m: '1px' }}
                />
            ))}
        </Box>
    )
}

export default SubCategory