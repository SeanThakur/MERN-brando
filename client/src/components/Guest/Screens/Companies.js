import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Companies(props) {
    const classes = useStyles();
    return (
      <React.Fragment>
      <CssBaseline />
      <div style={{marginTop:"50px"}}>
        <Container className={classes.cardGrid} maxWidth="lg">
        <Typography style={{marginBottom: "35px"}} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              COMPANY NAME
        </Typography>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://jollity.in/acrade/wp-content/themes/Lights/images/product_img/default.jpg"
                    title="Image title"
                  />
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <hr style={{width:"25%"}} />
        {/* 


          ---------------------Tie up company products Fields -------------------


        */}
        <Container className={classes.cardGrid} maxWidth="lg">
        <Typography style={{marginBottom: "50px"}} component="h3" variant="h3" align="left" color="textPrimary" gutterBottom>
              BRANDO TIEUP WITH AMAZON 
        </Typography>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://jollity.in/acrade/wp-content/themes/Lights/images/product_img/default.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                        <Typography style={{ fontWeight: "bold", paddingLeft: "10px", paddingBottom: "10px",fontSize:"15px", letterSpacing:"1px", marginRight: "auto" }}>
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
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      </React.Fragment>
    );
}

Companies.prototype = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Companies);
