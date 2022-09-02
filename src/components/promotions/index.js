import { Slide } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { MessageText, PromotionsContainer } from "../../styles/promotions";

const messages = [
    "message 1",
    "message 2",
    "message 3",
];

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
        <PromotionsContainer ref={containerRef}>
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
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>

        </PromotionsContainer>
    );
}

export default Promotions