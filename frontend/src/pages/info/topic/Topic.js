import { Box, Chip } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useAppContext } from '../../../context/AppContext'
import { useTopicContext } from '../../../context/TopicContext'


function Topic() {
    const { selectedCategory, selectedSubCategory, setSelectedSubCategory } = useAppContext()
    const { topics } = useTopicContext()
    const { t } = useTranslation()

    const handleClick = (name) => {
        setSelectedSubCategory(name)
    }

    const topicList = topics.filter((item) => (item.category === selectedCategory))

    return (
        <Box m={1}>
            {topicList.map((item) => (
                <Chip label={t(item.subCategory)}
                    key={item.id}
                    onClick={(e) => handleClick(item.subCategory)}
                    variant={item.subCategory === selectedSubCategory ? "filled" : "outlined"}
                    sx={{ m: "1px" }}
                />
            ))}
        </Box>
    )
}

export default Topic