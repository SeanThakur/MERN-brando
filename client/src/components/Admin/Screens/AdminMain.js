import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {getAdminTieupMyProfile} from "../../../redux/actions/Admin/adminTieupProfileActions";
import {getAdminProfile} from "../../../redux/actions/Admin/adminProfileActions";

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
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

function AdminMain(props) {

  const classes = useStyles();

  useEffect(() => {
    props.getAdminProfile();
    props.getAdminTieupMyProfile();
  }, []);


  let companyIntro;
  let companyProfile;
  let companyProfileAllProducts;


  // company Intro validation checking


  if(props.adminProfile.companyProfile !== null){
    companyIntro = (
      <React.Fragment>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {props.adminProfile.companyProfile.companyName}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              {props.adminProfile.companyProfile.discription}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button 
                    href={`/admin/tieup-profile/${props.adminProfile.companyProfile._id}`} 
                    variant="contained" 
                    color="secondary"
                  >
                    Make Tieup Company
                  </Button>
                </Grid>
                <Grid item>
                  <Button href="/admin/product" variant="contained" color="secondary">
                    make your Product
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </React.Fragment>
    )
  }else {
    companyIntro = <div>Intro Null</div>
  }


  //Tieup Company validation checking


  if(props.adminTieupProfile.tieupMyProfile === null && props.adminTieupProfile.isLoading === true){

    companyProfile = <div>Loading....</div>

  }else {

    if(props.adminTieupProfile.tieupMyProfile !== null) {

      if(props.adminTieupProfile.tieupMyProfile.length > 0) {

        companyProfile = (
          <React.Fragment>
            {props.adminTieupProfile.tieupMyProfile.map((profile) => (
              <Grid item key={profile._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardHeader
                        title={profile.companyName}
                        subheader={'By ' + profile.company.companyName}
                    />
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://jollity.in/acrade/wp-content/themes/Lights/images/product_img/default.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography>
                     {profile.discription}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                        <Button href="/admin/alltieups" variant="outlined" color="secondary" style={{ fontWeight: "bold", paddingLeft: "10px", fontSize:"15px", letterSpacing:"1px", marginBottom: "20px"}}>
                            View More
                        </Button>
                    </CardActions>
                </Card>
              </Grid>
            ))}
          </React.Fragment>
        )

      } else {
        companyProfile = <div>No Data Found</div>
      }

    } else {

      companyProfile = <div>No Data Found</div>

    }

  }

  
  //Company Products


  if(props.adminProfile.companyProfile !== null) {

    if(props.adminProfile.companyProfile.product !== null)
    {

      if(props.adminProfile.companyProfile.product.length > 0)
      {
        companyProfileAllProducts = (
          <React.Fragment>
            {props.adminProfile.companyProfile.product.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://jollity.in/acrade/wp-content/themes/Lights/images/product_img/default.jpg"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography>
                      {product.discription}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                        <Typography style={{ fontWeight: "bold", paddingLeft: "10px", fontSize:"15px", letterSpacing:"1px", marginRight: "auto" }}>
                            {product.price}
                        </Typography>
                    </CardActions>
                </Card>
              </Grid>
            ))}
          </React.Fragment>
        )
      } else {

        companyProfileAllProducts = (
          <React.Fragment>
            NO Product
          </React.Fragment>
        )

      }

    }


  }else {

    companyProfileAllProducts = (
      <React.Fragment>
        NO Product
      </React.Fragment>
    )

  }


  return (
    <React.Fragment>
      <CssBaseline />
      <main>

        {/* 



        --------------------------Intro Sections------------------------ *



        */}


        {
          companyIntro
        }


        {/* 



        --------------------------Company Sections------------------------ *



        */}


        <Container className={classes.cardGrid} maxWidth="lg">
        <Typography style={{marginBottom: "35px"}} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
              COMPANIES
        </Typography>
          <Grid container spacing={4}>
            {
              companyProfile
            }
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
            {
                companyProfileAllProducts
            }
          </Grid>
        </Container>


        <hr style={{width:'25%'}} />


      </main>
    </React.Fragment>
  );
}

AdminMain.propTypes = {
  error: PropTypes.object.isRequired,
  adminProfile: PropTypes.object.isRequired,
  adminTieupProfile: PropTypes.object.isRequired,
  getAdminProfile: PropTypes.func.isRequired,
  getAdminTieupMyProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  error: state.error,
  adminProfile: state.adminProfile,
  adminTieupProfile: state.adminTieupProfile
});

export default connect(mapStateToProps, {getAdminTieupMyProfile, getAdminProfile})(AdminMain);