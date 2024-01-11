import './App.css'
import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

function App() {
  return (
    <Card sx={{ maxWidth: 345 }} className='month'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src/assets/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MONFF INIT
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="secondary">
          Share
        </Button>
        <Button size="small" color="error">
          Share
        </Button>
        <Button size="small" color="success">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}

export default App
