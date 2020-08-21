import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 0, 6),
  },
  viewContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10,0,6),
    margin: theme.spacing(10,2,6),
    border: "solid 1px black"
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardGrid2: {
    paddingBottom: theme.spacing(10),
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
  viewAll: {
      padding: "12px"
  }
}));

const cards = [1, 2, 3, 4, 5, 6];
const cards2 = [1, 2, 3];
const cards3 = [1, 2, 3]

function Landing(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button href="/allcompanies" variant="contained" color="secondary">
                    View Companies
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="/allproducts" variant="outlined" color="secondary">
                    All Products
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* 



        --------------------------Company Sections------------------------ *



        */}
        <Container className={classes.cardGrid} maxWidth="lg">
        <Typography style={{marginBottom: "35px"}} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              COMPANIES
        </Typography>
          <Grid container spacing={4}>
            {cards3.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardHeader
                        title="Company Name"
                        subheader="since: 14 December, 2016"
                    />
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://jollity.in/acrade/wp-content/themes/Lights/images/product_img/default.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                      lorem ipsum dolor sit amet, consectetur adip
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                        <Button href="#" variant="outlined" color="secondary" style={{ fontWeight: "bold", paddingLeft: "10px", fontSize:"15px", letterSpacing:"1px", marginBottom: "20px"}}>
                            View More
                        </Button>
                    </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <hr style={{width:'25%'}} />
        {/* 


        --------------------------Products Sections------------------------ *


        */}
        <Container className={classes.cardGrid} maxWidth="lg">
        <Typography style={{marginBottom: "35px"}} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              PRODUCTS
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
                        <Typography style={{ fontWeight: "bold", paddingLeft: "10px",paddingBottom: "10px",fontSize:"15px", letterSpacing:"1px", marginRight: "auto" }}>
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
        <hr style={{width:'25%'}} />
        {/* 



        --------------------------Company Products Sections------------------------ *



        */}
        {/* <div className={classes.viewContent}> */}
        <Card style={{padding: '30px', margin: '70px'}}>
        <Container  className={classes.cardGrid2} maxWidth="lg">
        <Typography style={{marginBottom: "35px"}} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              Company Name
        </Typography>
        <Grid container spacing={4}>
            {cards2.map((card) => (
              <Grid item key={card} xs={12} md={4} sm={6}>
                <Card className={classes.card}>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://jollity.in/acrade/wp-content/themes/Lights/images/product_img/default.jpg"
                        title="Paella dish"
                    />
                    <CardActions disableSpacing>
                        <Typography style={{ fontWeight: "bold",paddingBottom: "10px", paddingLeft: "10px", fontSize:"15px", letterSpacing:"1px", marginRight: "auto" }}>
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
          <Button href="/allproducts" style={{marginTop: '40px', float: 'right'}} className={classes.viewAll} variant="outlined" color="secondary">
            View All
           </Button>
        </Container>
        </Card>
        {/* </div> */}
        {/* <div className={classes.viewContent}> */}
        <Card style={{padding: '30px', margin: '70px'}}>
        <Container  className={classes.cardGrid2} maxWidth="lg">
        <Typography style={{marginBottom: "35px"}} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              Company Name
        </Typography>
        <Grid container spacing={4}>
            {cards2.map((card) => (
              <Grid item key={card} xs={12} md={4} sm={6}>
                <Card className={classes.card}>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image="https://jollity.in/acrade/wp-content/themes/Lights/images/product_img/default.jpg"
                        title="Paella dish"
                    />
                    <CardActions disableSpacing>
                        <Typography style={{ fontWeight: "bold", paddingLeft: "10px",paddingBottom: "10px", fontSize:"15px", letterSpacing:"1px", marginRight: "auto" }}>
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
          <Button href="/allproducts" style={{marginTop: '40px', float: 'right'}} className={classes.viewAll} variant="outlined" color="secondary">
            View All
           </Button>
        </Container>
        </Card>
        {/* </div> */}
      </main>
    </React.Fragment>
  );
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Landing);