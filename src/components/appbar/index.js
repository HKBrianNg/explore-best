import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import AppbarDesktop from './appbarDesktop'
import AppbarMobile from './appbarMobile'


function Appbar() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <>
            {isMobile ? <AppbarMobile isMobile={isMobile} /> : <AppbarDesktop isMobile={isMobile} />}
        </>
    )
}

export default Appbar