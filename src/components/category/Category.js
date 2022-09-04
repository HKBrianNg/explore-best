import { Chip, Toolbar } from '@mui/material'
import { useAppContext } from '../../context/AppContext'
import { allCategories } from '../../constant';


function Category() {
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
                    sx={{ m: '1px' }}
                />
            ))}
        </Toolbar>
    )
}

export default Category