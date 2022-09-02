import React from 'react'
import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'


function Products() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))


    return (
        <h1>product</h1>
    )
}

export default Products