import { products as data } from '../../data/products'
import { Box, Card, CardHeader, CardMedia, CardContent, Avatar, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Colors } from '../../styles/theme/index'


function Videos() {

    const openVideo = () => {

    }

    return (
        <Box sx={{ flexGrow: 1, padding: 1, display: 'flex', flexWrap: 'wrap' }}>
            {data.map((item) => (
                <Card key={item.videoId} sx={{ maxWidth: 250, padding: 2 }}>
                    <CardMedia
                        component="img"
                        height="200"
                        width="400"
                        image={item.thumbnailUrl}
                        alt={item.title}
                        onClick={() => openVideo(item.videoId)}
                    />
                    <CardHeader sx={{ color: Colors.deep_orange, }}
                        avatar={<Avatar sx={{ bgcolor: Colors.deep_orange, width: 56, height: 56 }}>Save</Avatar>}
                        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
                        title={item.title}
                        subheader={item.publishedAt}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>

                </Card>
            ))}
        </Box>

    )
}

export default Videos