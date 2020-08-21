import React from "react";

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
      },
  }));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ,12];

function AllCompanies() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container  className={classes.cardGrid2} maxWidth="lg">
                    <Typography style={{marginBottom: "35px", marginTop: "100px"}} component="h1" variant="h2" align="left" color="textPrimary" gutterBottom>
                        COMPANIES
                    </Typography>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
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
            </main>
        </React.Fragment>
    )
}

export default AllCompanies
