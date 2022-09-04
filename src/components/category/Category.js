import { Stack, Chip, Toolbar } from '@mui/material'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AbcIcon from '@mui/icons-material/Abc';
import { useAppContext } from '../../context/AppContext'


function Category() {
    const { setSelectedCategory } = useAppContext()


    const handleClick = (value) => {
        setSelectedCategory(value)
    }


    return (
        <Toolbar variant='dense'>
            <Stack direction="row" spacing={1}>
                <Chip icon={<ImportantDevicesIcon />} onClick={(e) => handleClick('IT')} label="IT" size='medium' variant='outlined' />
                <Chip icon={<FitnessCenterIcon />} onClick={(e) => handleClick('Fitness')} label="Fitness" size='medium' variant="outlined" />
                <Chip icon={<AbcIcon />} onClick={(e) => handleClick('English')} label="English" size='medium' variant="outlined" />
            </Stack>
        </Toolbar>
    )
}

export default Category