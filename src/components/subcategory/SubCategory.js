import { Chip, Box } from '@mui/material'
import { useAppContext } from '../../context/AppContext'


function SubCategory() {
    const { setSelectedSubCategory } = useAppContext()


    const handleAppService = () => {
        setSelectedSubCategory('AppService')
    }

    const handleDevOps = () => {
        setSelectedSubCategory('DevOps')
    }

    const handleCICD = () => {
        setSelectedSubCategory('CICD')
    }

    const handleIDE = () => {
        setSelectedSubCategory('IDE')
    }

    const handleGithub = () => {
        setSelectedSubCategory('GitHub')
    }

    const handleDocker = () => {
        setSelectedSubCategory('Docker')
    }
    const handleReact = () => {
        setSelectedSubCategory('React')
    }

    const handleMERN = () => {
        setSelectedSubCategory('MERN')
    }

    const handleMicroServices = () => {
        setSelectedSubCategory('Microservices')
    }


    return (
        <Box>
            <Chip onClick={handleAppService} label="APPSERVICE" size='medium' variant='outlined' />
            <Chip onClick={handleDevOps} label="DEVOPS" size='medium' variant="outlined" />
            <Chip onClick={handleCICD} label="CICD" size='medium' variant="outlined" />
            <Chip onClick={handleIDE} label="IDE" size='medium' variant="outlined" />
            <Chip onClick={handleGithub} label="GITHUB" size='medium' variant="outlined" />
            <Chip onClick={handleDocker} label="DOCKER" size='medium' variant="outlined" />
            <Chip onClick={handleReact} label="REACT" size='medium' variant="outlined" />
            <Chip onClick={handleMERN} label="MERN" size='medium' variant="outlined" />
            <Chip onClick={handleMicroServices} label="MICROSERVICES" size='medium' variant="outlined" />
        </Box>
    )
}

export default SubCategory