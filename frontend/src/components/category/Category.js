import { Chip, Box } from '@mui/material'
import { useAppContext } from '../../context/AppContext'
import { allCategories } from '../../constant';


function Category() {
    const { selectedCategory, setSelectedCategory } = useAppContext()

    const handleClick = (label) => {
        setSelectedCategory(label)
    }

    return (
        <Box m={1} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {allCategories.map((item) => (
                <Chip
                    key={item.id}
                    icon={item.icon}
                    onClick={() => handleClick(item.label)}
                    label={item.label}
                    variant={selectedCategory === item.label ? "filled" : "outlined"}
                    sx={{ m: '1px' }}
                />
            ))}
        </Box>

    )
}

export default Category