import { useMediaQuery, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { products as data } from '../../data/products'
import { Card, CardHeader, CardMedia, CardContent, Avatar, IconButton, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Products() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

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
                    <CardHeader sx={{ color: deepOrange[600], }}
                        avatar={<Avatar sx={{ bgcolor: deepOrange[600], width: 56, height: 56 }}>Save</Avatar>}
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

export default Products