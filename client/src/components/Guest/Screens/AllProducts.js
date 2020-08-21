import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '150%',
    //paddingLeft: '56.25%', // 16:9
    height: '100%',
  },
  cardGrid: {
    paddingBottom: theme.spacing(10),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function AllProducts(props) {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
    <Typography style={{marginBottom: "35px", marginTop: '100px'}} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
          PRODUCTS
    </Typography>
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6}>
    <Card className={classes.root} >
        <CardMedia
            className={classes.cover}
            image="https://jollity.in/acrade/wp-content/themes/Lights/images/product_img/default.jpg"
            title="Live from space album cover"
        />
        <div className={classes.details}>
        <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                        <Typography style={{ fontWeight: "bold", paddingLeft: "10px", paddingBottom: "10px" ,fontSize:"15px", letterSpacing:"1px", marginRight: "auto" }}>
                            120
                        </Typography>
                        {

                          props.auth.isAuth === true ? (
                            <React.Fragment>
                              <IconButton aria-label="add to favorites">
                                <FavoriteIcon color="secondary" />
                              </IconButton>
                              <IconButton aria-label="share">
                                <ShoppingCartIcon color="secondary" />
                              </IconButton>
                            </React.Fragment>
                          ) : " "

                        }
                    </CardActions>
        </div>
    </Card>
    </Grid>
                ))}
                
        </Grid>
        </Container>
  );
}

AllProducts.prototype = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(AllProducts);
