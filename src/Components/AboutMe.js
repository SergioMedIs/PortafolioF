import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Maya3D', 'Medio', ),
  createData('Blender', 'Medio/Alto'),
  createData('Adobe Affther Effects', 'Medio'),
  createData('Adobe Premiere', 'Medio/Alto'),
  createData('Cinema 3D', 'Medio'),
  createData('PhotoShop', 'Medio'),
  createData('Desarrollador Web Full Stack', 'Medio'),

];




export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 1200, padding:15, margin:15 , marginLeft:35}}>
      <CardMedia
        component="img"
        alt="its  jhony"
        height="650"
        image="https://i.ibb.co/pQw3Rnb/Screenshot-20220822-205416-207.jpg"
        
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sergio Fabian Medina Islas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ►Ingeniero en Animacion Digital y Efectos visuales.
          ►Desarrollador Full Stack.
          ►Técnico en  Administrador de Empresas
          me gusta jugar videojeugos en mi tiempo libre, dibujar o salir a camniar.
          amante de la tecnológia, hardware, armar computadoras.
        </Typography>
      </CardContent>
      
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Software</StyledTableCell>
            <StyledTableCell align="right">Nivel</StyledTableCell>
        
  
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" >{row.calories}</StyledTableCell>
             

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <CardActions>
      <a target="_blank" href="https://github.com/SergioMedIs">
        <Button on size="small">GitHub</Button></a>

        
        <a target="_blank" href="https://www.youtube.com/channel/UC4LipGzHDZ8DP4elntTiBbg/videos">
        <Button on size="small">Youtube</Button></a>
      </CardActions>
    </Card>
    
  );
}


    
    
  


