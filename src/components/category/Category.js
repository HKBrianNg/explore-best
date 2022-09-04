import { Stack, Chip, Toolbar, AppBar } from '@mui/material'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useAppContext } from '../../context/AppContext'


function Category() {
    const { setSelectedCategory } = useAppContext()


    const handleIT = () => {
        setSelectedCategory('IT')
    }

    const handleFitness = () => {
        setSelectedCategory('Fitness')
    }

    return (
        <Toolbar variant='dense'>
            <Stack direction="row" spacing={1}>
                <Chip icon={<ImportantDevicesIcon />} onClick={handleIT} label="IT" size='medium' variant='outlined' />
                <Chip icon={<FitnessCenterIcon />} onClick={handleFitness} label="Fitness" size='medium' variant="outlined" />
            </Stack>
        </Toolbar>
    )
}

export default Category