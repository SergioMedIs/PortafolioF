import  React , { Suspense } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei/core';
import { OrbitControls} from "@react-three/drei";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { createTheme } from '@mui/material/styles';

/* const useStyles = makeStyles({
navBarButton:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
}

}) 
 */
export default function ButtonAppBar() {

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
  return (

    <Box sx={{ flexGrow: 1 }}> 
     
      <AppBar position="fixed" color='primary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr:60 }}
          >
            <MenuIcon />
          </IconButton>
       <Link to='/' >
          <Button   size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 15}}  >Inicio</Button>
            </Link>
            <Link to='/About'>
          <Button    size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 15 }}  >About me</Button>
            </Link>
            <Link to='/Gallery'>
          <Button     size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 15 }}  >Gallery</Button>
            </Link>
        {/*   <Button     size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5}} >Pictures</Button> */}
          
        </Toolbar>
      </AppBar>
   
    </Box>
      
  );
}
