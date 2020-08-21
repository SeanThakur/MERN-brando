import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Typography} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

function Product(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div style={{marginTop: '120px', padding: '10px'}}>
                    <Container maxWidth="lg">
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <br />
                                <img alt="Default" src="https://jollity.in/acrade/wp-content/themes/Lights/images/product_img/default.jpg" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <br />
                                <Card style={{paddingTop: '30px'}}>
                                    <CardContent>
                                        <Typography variant="h5" style={{padding: '20px', letterSpacing: "2px"}}>CEO / CO-FOUNDER</Typography>
                                        <Typography variant="h6"style={{padding: '20px', letterSpacing: "2px"}}>Alec Thompson</Typography>
                                        <Typography varient="caption" style={{padding: '20px', letterSpacing: "2px"}}>
                                            Don{"'"}t be scared of the truth because we need to restart the
                                            human foundation in truth And I love you like Kanye loves Kanye
                                            I love Rick Owens’ bed design but the back is...
                                        </Typography>
                                        {

                                            props.auth.isAuth === true ? (
                                                <React.Fragment>
                                                    <Tooltip title="Add to Wishlist">
                                                        <IconButton style={{marginLeft: "10px"}} aria-label="add to favorites">
                                                            <FavoriteIcon color="secondary" />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Button variant="outlined" color="secondary" style={{margin: '18px', letterSpacing: "2px"}}>
                                                        ADD CART
                                                    </Button>
                                                </React.Fragment>
                                            ) : " "

                                        }
                                        <Button variant="outlined" color="secondary" style={{margin: '18px', letterSpacing: "2px"}}>
                                            BUY NOW
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        </React.Fragment>
    )
}

Product.prototype = {
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, null)(Product);
