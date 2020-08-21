import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { setAccount, getCurrentAccount, deleteCurrentAccount} from "../../../redux/actions/Guest/accountActions";
import { setLogout } from "../../../redux/actions/authGuestActions";

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(10, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        width: '130px',
        height: '130px',
        marginTop: "20px"
    },
  }));

function Account(props) {
    const classes = useStyles();

    useEffect(() => {
        props.getCurrentAccount();
    }, [])

    // Create New Account for Newly Logged User

    const [phoneNo, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [country, setCountry] = useState('');

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handlePhoneNoChange = (e) => {
        setPhoneNo(e.target.value);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
    }

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProfile = {
            phoneNo,
            address,
            city,
            zipCode,
            country
        }
        props.setAccount(newProfile, window.location);
    }

    const handleDeleteAccount = () => {
        props.deleteCurrentAccount();
        props.setLogout();
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={8}> 
                        <Card style={{padding: "60px", margin: "10px", marginTop: "100px"}}>
                            {
                                props.account.account === null ? (
                                    <React.Fragment>
                                        <Typography variant="h5" style={{ letterSpacing: "2px", fontWeight:"bold"}}>
                                SHIPPING ADDRESS
                            </Typography>
                            <br />
                                <form onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <br />  
                                    <TextField
                                        required
                                        autoFocus
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="shipping address"
                                        color="secondary"
                                        variant="outlined"
                                        value={address}
                                        onChange={handleAddressChange}
                                    />
                                    </Grid>
                                    <br />
                                    <Grid item xs={12} sm={6}>
                                        <br />
                                        <TextField
                                            required
                                            id="city"
                                            name="city"
                                            label="City"
                                            fullWidth
                                            color="secondary"
                                            variant="outlined"
                                            value={city}
                                            onChange={handleCityChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <br />
                                        <TextField 
                                            required 
                                            color="secondary" 
                                            id="phoneNo" 
                                            name="phoneNo" 
                                            variant="outlined" 
                                            label="phone number" 
                                            fullWidth 
                                            value={phoneNo}
                                            onChange={handlePhoneNoChange}
                                        />
                                    </Grid>
                                    <br />
                                    <Grid item xs={12} sm={6}>
                                    <br />
                                    <TextField
                                        required
                                        id="zipCode"
                                        name="zipCode"
                                        label="Zip / Postal code"
                                        fullWidth
                                        color="secondary"
                                        variant="outlined"
                                        value={zipCode}
                                        onChange={handleZipCodeChange}
                                    />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                    <br />
                                    <TextField
                                        required
                                        id="country"
                                        name="country"
                                        label="Country"
                                        fullWidth
                                        autoComplete="shipping country"
                                        color="secondary"
                                        variant="outlined"
                                        value={country}
                                        onChange={handleCountryChange}
                                    />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <br />
                                        <Button     
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<CloudUploadIcon />}
                                        >
                                            Upload Profile Image
                                            <input 
                                                type="file"
                                                style={{
                                                    padding: '10px', 
                                                    display: 'none',
                                                }}
                                            />
                                        </Button>
                                        
                                    </Grid>
                                </Grid>
                                <br />
                                <Button 
                                    type="submit"
                                    color="secondary" 
                                    variant="outlined" 
                                    style={{margin: '20px',marginTop: "30px", letterSpacing: "2px",float: "right" }}
                                    onSubmit={handleSubmit}
                                >
                                    Submit
                                </Button>
                            </form>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <Typography varient="subtitle2" style={{padding: '20px', letterSpacing: "2px"}}>
                                            Hello {
                                                props.auth.user.username
                                            } You Have Already Created Your Profile. If you want to Modify your profile then go to
                                            below link
                                        </Typography>
                                        <Button 
                                            variant="outlined" 
                                            href="/edit-account"
                                            color="secondary" 
                                            style={{margin: '18px', letterSpacing: "2px"}}
                                        >
                                            EDIT ACCOUNT
                                        </Button>
                                    </React.Fragment>
                                )
                            }
                            
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                        {
                            props.account.account === null ? '' : (
                                <React.Fragment>
                                        <Card align="center" style={{padding: "20px", margin: "10px", marginTop: "100px"}}>
                            <Avatar className={classes.avatar}>
                                <PersonIcon style={{width: '100px', height: '100px'}}/>
                            </Avatar>
                            <CardContent>
                                <Typography variant="h5" style={{padding: '20px', letterSpacing: "2px"}}>
                                    {
                                        props.auth.user.username
                                    } / {' '}
                                    {
                                        props.auth.user.gender
                                    }
                                </Typography>
                                <Typography variant="h6"style={{padding: '20px', letterSpacing: "2px"}}>
                                    {
                                        props.auth.user.email
                                    } / {' '}
                                    {
                                        props.account.account.phoneNo
                                    }
                                </Typography>
                                <Typography variant="subtitle2" style={{padding: '10px', letterSpacing: "1.5px"}}>
                                    {
                                        props.account.account.city
                                    } / {' '}
                                    {
                                        props.account.account.country
                                    } / {' '}
                                    {
                                        props.account.account.zipCode
                                    }
                                </Typography>
                                <Typography varient="subtitle2" style={{padding: '20px', letterSpacing: "2px"}}>
                                    {
                                        props.account.account.address
                                    }
                                </Typography>
                                <Button 
                                    variant="outlined" 
                                    color="secondary" 
                                    style={{margin: '18px', letterSpacing: "2px"}}
                                    onClick={handleDeleteAccount}
                                >
                                    DELETE ACCOUNT
                                </Button>
                            </CardContent>
                        </Card>
                                </React.Fragment>
                            )
                        }
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    )
}

Account.propTypes = {
    auth: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    account: PropTypes.object.isRequired,
    setAccount: PropTypes.func.isRequired,
    getCurrentAccount: PropTypes.func.isRequired,
    deleteCurrentAccount: PropTypes.func.isRequired,
    setLogout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    error: state.error,
    account: state.account
});

export default connect(mapStateToProps, {setAccount,getCurrentAccount,deleteCurrentAccount,setLogout})(Account);
