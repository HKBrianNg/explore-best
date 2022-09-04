import { Chip, Toolbar } from '@mui/material'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AbcIcon from '@mui/icons-material/Abc';
import { useAppContext } from '../../context/AppContext'
import { useState } from 'react'

const initialCategories = [
    { id: "1", name: "IT", icon: <ImportantDevicesIcon /> },
    { id: "2", name: "Fitness", icon: <FitnessCenterIcon /> },
    { id: "3", name: "English", icon: <AbcIcon /> }
]


function Category() {
    // eslint-disable-next-line
    const [allCategories, setAllCategories] = useState(initialCategories)
    const { selectedCategory, setSelectedCategory } = useAppContext()

    const handleClick = (name) => {
        setSelectedCategory(name)
    }

    return (
        <Toolbar variant='dense'>
            {allCategories.map((item) => (
                <Chip
                    key={item.id}
                    icon={item.icon}
                    onClick={() => handleClick(item.name)}
                    label={item.name}
                    variant={selectedCategory === item.name ? "filled" : "outlined"}
                />
            ))}
        </Toolbar>
    )
}

export default Category