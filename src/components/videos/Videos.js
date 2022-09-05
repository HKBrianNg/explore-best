import { Box, Card, CardHeader, CardMedia, CardContent, IconButton, Typography, CardActions } from '@mui/material';
import { Colors } from '../../styles/theme/index'
import { useNavigate } from 'react-router-dom';
import { useVideoContext } from '../../context/VideoContext'
import { useAppContext } from '../../context/AppContext';
import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

function Videos() {
    const { videos, setSelectedId } = useVideoContext()
    const { isAdmin, selectedCategory, selectedSubCategory } = useAppContext()
    const navigate = useNavigate()

    const openVideo = (videoId) => {
        navigate(`/video/${videoId}`, { replace: true })
    }

    const editVideo = (id) => {
        setSelectedId(id)
        navigate(`/video/add/${id}`, { replace: true })
    }

    // const deleteVideo = (id) => {

    //     setSelectedId(id)
    // }

    const data = videos.filter((video) => (video.category === selectedCategory && video.subCategory === selectedSubCategory))
    return (
        <>
            <Box sx={{ flexGrow: 1, padding: 1, display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                {data.map((item, i) => (
                    <Card key={i} sx={{ maxWidth: 270, padding: 2 }}>
                        <CardHeader sx={{ color: Colors.deep_orange, }}
                            titleTypographyProps={{ variant: "h5" }}
                            title={item.title}
                            subheader={item.publishedAt}
                        />
                        <CardMedia
                            component="img"
                            height="100"
                            width="270"
                            image={item.thumbnailUrl}
                            alt={item.title}
                            onClick={() => openVideo(item.videoId)}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {isAdmin &&
                                <div>
                                    <IconButton onClick={() => editVideo(item._id)}>
                                        <EditIcon />
                                    </IconButton>
                                </div>
                            }
                            {/* {isAdmin &&
                                <div>
                                    <IconButton>
                                        <DeleteIcon onClick={() => deleteVideo(item._id)} />
                                    </IconButton>
                                </div>
                            } */}

                        </CardActions>

                    </Card>
                ))}
            </Box>
        </>

    )
}

export default Videos