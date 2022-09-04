import { Slide } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Colors } from '../../styles/theme'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const messages = [
    "message 1",
    "message 2",
    "message 3",
];

export const PromotionBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        padding: '40px 0px 40px 0px',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px',
    background: Colors.secondary
}))

export const MessageTypography = styled(Typography)(({ theme }) => ({
    fontFamily: '"Montez", "cursive"',
    [theme.breakpoints.up("md")]: {
        fontSize: "3rem",
    },
    color: Colors.white,
    fontSize: "1.5rem",
}))


function Promotions() {
    const [messageIndex, setMessageIndex] = useState(0)
    const [show, setShow] = useState(true)
    const containerRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, 3000)
        const intervalId = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length)
            setShow(true)

            setTimeout(() => {
                setShow(false)
            }, 4000)
        }, 5000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <PromotionBox ref={containerRef}>
            <Slide
                container={containerRef.current}
                direction={show ? 'left' : 'right'}
                timeout={{
                    enter: 500,
                    exit: 100
                }}
                in={show}
            >
                <Box display='flex' justifyContent='center'>
                    <MessageTypography>
                        {messages[messageIndex]}
                    </MessageTypography>
                </Box>
            </Slide>
        </PromotionBox>
    );
}

export default Promotions