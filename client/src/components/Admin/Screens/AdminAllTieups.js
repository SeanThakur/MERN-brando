import React , {useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {getAdminTieupMyProfile, setDeleteAdminTieupProfile} from "../../../redux/actions/Admin/adminTieupProfileActions";

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function AdminAllTieups(props) {

    const handleDeleteTieupProfile = (e) => {
        e.preventDefault();
        props.setDeleteAdminTieupProfile();
        window.location.href = "/admin/alltieups";
    }

    useEffect(() => {
        props.getAdminTieupMyProfile();
    }, []);

    let tieupCompany;

    if(props.adminTieupProfile.tieupMyProfile === null && props.adminTieupProfile.isLoading === true) {

        tieupCompany = (
            <React.Fragment>
                <Typography variant="h5" style={{alignItems: 'center', padding: "5px", margin: "5px", letterSpacing: "2px", fontWeight:"bold"}}>
                    LOADING....
                </Typography>
            </React.Fragment>
        )

    }else {
        if(props.adminTieupProfile.tieupMyProfile !== null)
        {
            if(props.adminTieupProfile.tieupMyProfile.length > 0)
            {
                tieupCompany = props.adminTieupProfile.tieupMyProfile.map(tieup => (
                    <React.Fragment key={tieup._id}>
                        <Grid item xs={12} sm={6}>
                        <Card align="center" style={{padding: "20px", margin: "10px", marginTop: "10px"}}>
                            <CardContent>
                                <Typography variant="h5" style={{padding: '20px',letterSpacing: "2px"}}>
                                    {tieup.companyName} / {tieup.companyType}
                                </Typography>
                                <Typography variant="h6"style={{padding: '20px', letterSpacing: "2px"}}>
                                    Owner: {tieup.ownerName} / By Company: {tieup.company.companyName}
                                </Typography>
                                <Typography varient="caption" style={{padding: '20px', letterSpacing: "2px"}}>
                                    {tieup.discription}
                                </Typography>
                                <Typography varient="subtitle2" style={{padding: '20px', letterSpacing: "2px"}}>
                                    You have {tieup.productCount} Product 
                                </Typography>
                                <Button 
                                    href={`/admin/tieup-product/${tieup._id}`}
                                    variant="outlined" 
                                    color="secondary" 
                                    style={{margin: '18px', letterSpacing: "2px"}}
                                >
                                    MAKE PRODUCT
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    color="secondary" 
                                    style={{margin: '18px', letterSpacing: "2px"}}
                                    onClick={handleDeleteTieupProfile}
                                >
                                    DELETE ACCOUNT
                                </Button>
                            </CardContent>
                        </Card>
                        </Grid>
                    </React.Fragment>
                ));
            } else {
                tieupCompany = <div>You have not created any tieup company yet</div>
            }
           
        }else {
            tieupCompany = <div>There is No Company Available</div>
        }
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="xl">
                    <Grid container>
                        <Typography variant="h5" style={{padding: "5px", margin: "5px", letterSpacing: "2px", fontWeight:"bold",marginTop: "100px"}}>
                            ALL TIEUPS PROFILE
                        </Typography>
                    </Grid>
                    <Grid container>
                        {
                            tieupCompany
                        }
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

AdminAllTieups.propTypes = {
    adminTieupProfile: PropTypes.object.isRequired,
    setDeleteAdminTieupProfile: PropTypes.func.isRequired,
    getAdminTieupMyProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    adminTieupProfile: state.adminTieupProfile,
});

export default connect(mapStateToProps,{getAdminTieupMyProfile, setDeleteAdminTieupProfile})(AdminAllTieups);