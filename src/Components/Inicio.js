import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function TitlebarImageList() {
  return (
    <ImageList sx={{ width: 1500, height: 540 , paddingLeft:65, paddingTop:12}}  >
      <ImageListItem key="Subheader" cols={2}>
       
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
         
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>

    
    
  );

}

const itemData = [
  {
    img: "https://i.ibb.co/hcQDn4M/bannmn.png",
    title: "contactodirecto",
    author: "Zerkon_97@hotmail.com",
    rows: 2,
    cols: 2,
    featured: true
  }
  
];


 

  
  