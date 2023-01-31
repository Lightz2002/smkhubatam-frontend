import {
  Avatar,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  Grid,
  Typography,
  CardActionArea,
} from "@mui/material";

const LocationListItem = (props) => {
  const { location, showLocation } = props;
  return (
    <Grid item key={location.id} xs={4}>
      <Card
        sx={{ maxWidth: 345 }}
        onClick={(e) => showLocation(e, location.Id)}
      >
        <CardActionArea>
          <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {location.Name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default LocationListItem;
