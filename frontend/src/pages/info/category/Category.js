import { Chip, Box } from '@mui/material'
import { useAppContext } from '../../../context/AppContext'
import { allCategories } from '../../../constant';
import { useTranslation } from 'react-i18next';


function Category() {
    const { selectedCategory, setSelectedCategory } = useAppContext()
    const { t } = useTranslation()


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
                    label={t(item.label)}
                    variant={selectedCategory === item.label ? "filled" : "outlined"}
                    sx={{ m: '1px' }}
                />
            ))}
        </Box>

    )
}

export default Category