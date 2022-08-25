import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "100%", marginTop: 2}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 5, sm: 5, md: 5 }}>
        <Grid item xs={3}>
                
<Card sx={{ maxWidth: 345,margin:15 }}>
<CardHeader
 
  title="Google"
  subheader="Google"
/>
<CardMedia
  component="img"
  height="194"
  image="https://i.ibb.co/KmbBz08/Captura-de-pantalla-2022-08-24-164528.png"
  alt="G"
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
  <a target="_blank" href="https://sergiomedis.github.io/googletest001/">
        <Button on size="small">Ver</Button>
        </a>
  </Typography>
</CardContent>
<CardActions disableSpacing>


</CardActions>

</Card> 
        </Grid>
        <Grid item xs={3}>
                
<Card sx={{ maxWidth: 345,margin:15 }}>
<CardHeader
 
  title="Travel page"
  subheader="On your way"
/>
<CardMedia
  component="img"
  height="194"
  image="https://i.ibb.co/5Y5Kxq1/Captura-de-pantalla-2022-08-24-184322.png"
  alt="your destiny"
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
  <a target="_blank" href="https://sergiomedis.github.io/3-FLEXBOX-CSS-GRID-spotify-premium-/">
        <Button on size="small">Ver</Button>
        </a>
  </Typography>
</CardContent>
<CardActions disableSpacing>


</CardActions>

</Card> 
        </Grid>
        <Grid item xs={3}>
       
<Card sx={{ maxWidth: 345,margin:15 }}>
<CardHeader
 
  
  title="Spotify "
  subheader="New User"
/>
<CardMedia
  component="img"
  height="194"
  image="https://i.ibb.co/tc83J6v/Captura-de-pantalla-2022-08-24-184942.png"
  alt="music"
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
  <a target="_blank" href="https://sergiomedis.github.io/3-FLEXBOX-CSS-GRID-spotify/#">
        <Button on size="small">Ver</Button>
        </a>
  </Typography>
</CardContent>
<CardActions disableSpacing>


</CardActions>

</Card> 
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345,margin:15 }}>
<CardHeader
 
  title="Pagina de ventas"
  subheader="Tecnología"
/>
<CardMedia
  component="img"
  height="194"
  image="https://i.ibb.co/QYSRKRy/Captura-de-pantalla-2022-08-24-185253.png"
  alt="tech"
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
  <a target="_blank" href="https://sergiomedis.github.io/Proyecto01-ventas/">
        <Button on size="small">Ver</Button>
        </a>
  </Typography>
</CardContent>
<CardActions disableSpacing>


</CardActions>

</Card> 
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345,margin:15 }}>
<CardHeader
 
  
  title="Apis-Charts "
  subheader="Pokemon"
/>
<CardMedia
  component="img"
  height="194"
  image="https://i.ibb.co/BqVf9p8/Captura-de-pantalla-2022-08-24-191312.png"
  alt="music"
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
  <a target="_blank" href="https://sergiomedis.github.io/chart-izard/">
        <Button on size="small">Ver</Button>
        </a>
  </Typography>
</CardContent>
<CardActions disableSpacing>


</CardActions>

</Card> 
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345,margin:15 }}>
<CardHeader
 
  title="
  shipments"
  subheader="Tecnología"
/>
<CardMedia
  component="img"
  height="194"
  image="https://i.ibb.co/TPPkngj/Captura-de-pantalla-2022-08-24-185835.png"
  alt="tech"
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
  <a target="_blank" href="https://sergiomedis.github.io/PROYECTO-2-Aplicacion-CRUD/">
        <Button on size="small">Ver</Button>
        </a>
  </Typography>
</CardContent>
<CardActions disableSpacing>


</CardActions>

</Card> 
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345,margin:15 }}>
<CardHeader
 
  title="
  Restaurant"
  subheader="hellot-here"
/>
<CardMedia
  component="img"
  height="194"
  image="https://i.ibb.co/9VjCfZN/Captura-de-pantalla-2022-08-24-191603.png"
  alt="tech"
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
  <a target="_blank" href="https://hammerhead-restorante.netlify.app/">
        <Button on size="small">Ver</Button>
        </a>
  </Typography>
</CardContent>
<CardActions disableSpacing>


</CardActions>

</Card> 
        </Grid>
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 345,margin:15 }}>
<CardHeader
 
  title="
  Columbus"
  subheader="3D"
/>
<CardMedia
  component="img"
  height="194"
  image="https://i.ibb.co/BySFVHS/Captura-de-pantalla-2022-08-24-202128.png
  "
  alt="tech"
/>
<CardContent>
  <Typography variant="body2" color="text.secondary">
  <Link to ='/Columbus'>
        <Button on size="small">Ver</Button>
        </Link>
  </Typography>
</CardContent>
<CardActions disableSpacing>


</CardActions>

</Card> 
        </Grid>
        <Grid item xs={3}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

