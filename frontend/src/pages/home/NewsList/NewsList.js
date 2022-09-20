import { Box, Card, Link, CardContent, Typography, Stack } from '@mui/material'
import { useNewsContext } from '../../../context/NewsContext'
import moment from 'moment';


const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

function NewsList() {
  const { news } = useNewsContext()

  if (news.length === 0) {
    return
  }


  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {news.length > 0 && news.map((item, id) => (
        <Card key={id} sx={{ maxWidth: 345, m: '5px' }}>
          <Link href={item.url} target="_blank" rel="noopener" underline="none">
            <Stack direction='row' space={0.5}>
              <Typography gutterBottom variant="h4" component="div" m={1}>
                {item.name}
              </Typography>
              <img width={90} height={90} src={item?.image?.thumbnail?.contentUrl || demoImage} alt={item.name} />
            </Stack>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography m={1} variant="h6" color="text.secondary">
                {moment(item.datePublished).startOf('ss').fromNow()}
              </Typography>
            </CardContent>
          </Link>
        </Card>
      ))}
    </Box>
  )
}

export default NewsList