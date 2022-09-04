import { Chip, Box } from '@mui/material'
import { useAppContext } from '../../context/AppContext'


function SubCategory() {
    const { selectedCategory, setSelectedSubCategory } = useAppContext()

    const handleClick = (value) => {
        setSelectedSubCategory(value)
    }

    return (
        <>
            {selectedCategory === 'IT' &&
                <Box m={2}>
                    <Chip onClick={(e) => handleClick('AppService')} label="APPSERVICE" size='medium' variant='outlined' />
                    <Chip onClick={(e) => handleClick('DevOps')} label="DEVOPS" size='medium' variant="outlined" />
                    <Chip onClick={(e) => handleClick('CICD')} label="CICD" size='medium' variant="outlined" />
                    <Chip onClick={(e) => handleClick('IDE')} label="IDE" size='medium' variant="outlined" />
                    <Chip onClick={(e) => handleClick('GitHub')} label="GITHUB" size='medium' variant="outlined" />
                    <Chip onClick={(e) => handleClick('Docker')} label="DOCKER" size='medium' variant="outlined" />
                    <Chip onClick={(e) => handleClick('React')} label="REACT" size='medium' variant="outlined" />
                    <Chip onClick={(e) => handleClick('MERN')} label="MERN" size='medium' variant="outlined" />
                    <Chip onClick={(e) => handleClick('Microservices')} label="MICROSERVICES" size='medium' variant="outlined" />
                </Box>
            }
            {
                selectedCategory === 'Fitness' &&
                <Box m={2}>
                    <Chip onClick={(e) => handleClick('Fitness1')} label="Fitness1" size='medium' variant='outlined' />
                </Box>
            }
            {
                selectedCategory === 'English' &&
                <Box m={2}>
                    <Chip onClick={(e) => handleClick('English1')} label="English1" size='medium' variant='outlined' />
                </Box>
            }
        </>
    )
}

export default SubCategory