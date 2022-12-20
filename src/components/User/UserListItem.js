import {
  Avatar,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography,
  CardActionArea,
} from "@mui/material";

const UserListItem = (props) => {
  const { user, showUser } = props;
  return (
    <Grid item key={user.id} xs={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={(e) => showUser(e, user.Id)}>
          <CardHeader
            height="100"
            avatar={
              <Avatar
                src="https://images.ctfassets.net/hrltx12pl8hq/go6z2gBaTMDvTrtoOipOw/3b9d21ff7003ca392a2daeb569d629fc/shutterstock_1802211250.jpg?fit=fill&w=175&h=175&fm=webp"
                aria-label="recipe"
              />
            }
            title={user.Name}
            subheader={`${user.Age} Yrs, ${user.Gender}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default UserListItem;
