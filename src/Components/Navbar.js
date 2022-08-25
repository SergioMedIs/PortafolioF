import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
/* import { makeStyles } from '@mui/material'; */
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Routes, Route, Link } from "react-router-dom";



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
     /* const classes = useStyles()  */
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='primary'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
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
            sx={{ mr: 15 }}  >Gallerry</Button>
            </Link>
          <Button     size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5}} >Pictures</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
