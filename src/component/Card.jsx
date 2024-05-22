import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MediaCard = ( props ) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         { props.brand}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.model}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.price}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {props.year}
        </Typography>
        <Button gutterBottom variant="h5" variant="contained" color='error' onClick={props.userDelete}>
          delete
        </Button>
      </CardContent>
    </Card>
  );
}

export default MediaCard;
