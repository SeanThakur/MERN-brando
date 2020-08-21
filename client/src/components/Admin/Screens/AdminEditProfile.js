import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {setAdminProfile, getAdminProfile} from "../../../redux/actions/Admin/adminProfileActions";
import isEmpty from "../../../utils/is-empty";

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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

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

function AdminEditProfile(props) {
    const classes = useStyles();

    useEffect(() => {
        props.getAdminProfile();
    }, []);

    const [companyName, setCompanyName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    // const [since, setSince] = useState('');
    const [discription, setDiscription] = useState('');
    const [locatedAt, setLocatedAt] = useState('');
    const [youtube, setYoutube] = useState('none');
    const [instagram, setInstagram] = useState('none');
    const [twitter, setTwitter] = useState('none');
    const [linkedin, setLinkedIn] = useState('none');
    const [facebook, setFacebook] = useState('none');
    const [companyType, setCompanyType] = useState('Private');
    const [error, setError] = useState([]);

    useEffect(() => {
        if(props.error.companyName) {
            setError(props.error.companyName);
        }
    },[props.error.companyName]);

    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
    }

    const handleOwnerNameChange = (e) => {
        setOwnerName(e.target.value);
    }

    // const handleSinceChange = (e) => {
    //     setSince(e.target.value);
    // }

    const handleDiscriptionChange = (e) => {
        setDiscription(e.target.value);
    }

    const handleLocatedAtChange = (e) => {
        setLocatedAt(e.target.value);
    }

    const handleYoutubeChange = (e) => {
        setYoutube(e.target.value);
    }

    const handleFacebookChange = (e) => {
        setFacebook(e.target.value);
    }

    const handleLinkedinChange = (e) => {
        setLinkedIn(e.target.value);
    }

    const handleInstagramChange = (e) => {
        setInstagram(e.target.value);
    }

    const handleTwitterChange = (e) => {
        setTwitter(e.target.value);
    }

    const handleRadioChange = (event) => {
        setCompanyType(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProfile = {
            companyName,
            ownerName,
            // since,
            discription,
            locatedAt,
            youtube,
            instagram,
            facebook,
            twitter,
            linkedin,
            companyType
        }
        props.setAdminProfile(newProfile, window.location);
    }

    useEffect(() => {

        if(props.adminProfile.companyProfile)
        {
            const profile = props.adminProfile.companyProfile;

            const locatedAtCSV = profile.locatedAt.join(',');

            profile.companyName = !isEmpty(profile.companyName) ? profile.companyName : '';
            profile.ownerName = !isEmpty(profile.ownerName) ? profile.ownerName : '';
            //profile.since = !isEmpty(profile.since) ? profile.since : '';
            profile.discription = !isEmpty(profile.discription) ? profile.discription : '';
            profile.companyType = !isEmpty(profile.companyType) ? profile.companyType : '';
            profile.social.youtube = !isEmpty(profile.social.youtube) ? profile.social.youtube : '';
            profile.social.facebook = !isEmpty(profile.social.facebook) ? profile.social.facebook : '';
            profile.social.instagram = !isEmpty(profile.social.instagram) ? profile.social.instagram : '';
            profile.social.twitter = !isEmpty(profile.social.twitter) ? profile.social.twitter : '';
            profile.social.linkedin = !isEmpty(profile.social.linkedin) ? profile.social.linkedin : '';

            setCompanyName(profile.companyName);
            setOwnerName(profile.ownerName);
            //setSince(profile.since);
            setDiscription(profile.discription);
            setLocatedAt(locatedAtCSV);
            setCompanyType(profile.companyType);
            setYoutube(profile.social.youtube);
            setFacebook(profile.social.facebook);
            setTwitter(profile.social.twitter);
            setLinkedIn(profile.social.linkedin);
            setInstagram(profile.social.instagram);
            
        }

    }, [props.adminProfile.companyProfile]);

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={7}> 
                        <Card style={{padding: "60px", margin: "10px", marginTop: "100px"}}>
                            <Grid item xs={12}>
                            <Typography variant="h5" style={{ letterSpacing: "2px", fontWeight:"bold"}}>
                                UPDATE PROFILE
                            </Typography>
                            <br />
                            <Typography variant="subtitle2" style={{color: "red", fontWeight: "bold", letterSpacing: "1.5px"}}>
                                {
                                error
                                }
                            </Typography>
                            </Grid>
                            <br />
                            <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <br />
                                <TextField
                                    required
                                    id="companyName"
                                    name="companyName"
                                    label="Company name"
                                    fullWidth
                                    color="secondary"
                                    variant="outlined"
                                    value={companyName}
                                    onChange={handleCompanyNameChange}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <br />
                                <TextField 
                                    required 
                                    color="secondary" 
                                    id="ownerName" 
                                    name="ownerName" 
                                    variant="outlined" 
                                    label="Owner name" 
                                    fullWidth
                                    value={ownerName}
                                    onChange={handleOwnerNameChange}
                                />
                                </Grid>
                                {/* <Grid item xs={12} sm={4}>
                                <br />
                                <TextField 
                                    // required 
                                    color="secondary" 
                                    id="since" 
                                    name="since" 
                                    variant="outlined" 
                                    type="date"
                                    fullWidth 
                                    value={since}
                                    onChange={handleSinceChange}
                                />
                                </Grid> */}
                                <Grid item xs={12}>
                                    <br />  
                                <TextField
                                    required
                                    id="discription"
                                    name="discription"
                                    label="Discription"
                                    fullWidth
                                    color="secondary"
                                    variant="outlined"
                                    value={discription}
                                    onChange={handleDiscriptionChange}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                    <br />  
                                <TextField
                                    required
                                    id="locatedAt"
                                    name="locatedAt"
                                    label="Location of your Company exists"
                                    fullWidth
                                    color="secondary"
                                    variant="outlined"
                                    value={locatedAt}
                                    onChange={handleLocatedAtChange}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                    <br />
                                    <FormLabel  style={{fontSize: "18px", letterSpacing: "1.5px", fontWeight: "bold"}}>Social Links</FormLabel>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <br />
                                <TextField
                                    //required
                                    id="youtube"
                                    name="youtube"
                                    label="Youtube Social Link || type none"
                                    fullWidth
                                    color="secondary"
                                    variant="outlined"
                                    value={youtube}
                                    onChange={handleYoutubeChange}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <br />
                                <TextField 
                                    //required
                                    color="secondary" 
                                    id="facebook" 
                                    name="facebook" 
                                    variant="outlined" 
                                    label="Facebook Social Link || type none" 
                                    fullWidth 
                                    value={facebook}
                                    onChange={handleFacebookChange}
                                />
                                </Grid>
                                <br />
                                <Grid item xs={12} sm={6}>
                                <br />
                                <TextField
                                    //required
                                    id="instagram"
                                    name="instagram"
                                    label="Instagram Social Link || type none"
                                    fullWidth
                                    color="secondary"
                                    variant="outlined"
                                    value={instagram}
                                    onChange={handleInstagramChange}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <br />
                                <TextField
                                    //required
                                    id="twitter"
                                    name="twitter"
                                    label="Twitter Social Link || type none"
                                    fullWidth
                                    color="secondary"
                                    variant="outlined"
                                    value={twitter}
                                    onChange={handleTwitterChange}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                    <br />  
                                <TextField
                                    //required
                                    id="linkedin"
                                    name="linkedin"
                                    label="Linkedin Social Link || type none"
                                    fullWidth
                                    color="secondary"
                                    variant="outlined"
                                    value={linkedin}
                                    onChange={handleLinkedinChange}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                    <br />
                                    <FormLabel style={{fontSize: "18px", letterSpacing: "1.5px", fontWeight: "bold"}}>Company Type</FormLabel>
                                </Grid>
                                <Grid item xs={12}>
                                    <RadioGroup name="companyType" value={companyType} onChange={handleRadioChange} style={{flexDirection: 'row'}}>
                                        <FormControlLabel value="Private" control={<Radio />} label="Private Company" /> {' '}
                                        <FormControlLabel value="Government" control={<Radio />} label="Government Company" />
                                    </RadioGroup>
                                </Grid>
                                <Grid item xs={12}>
                                    <br />
                                    <Button     
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Upload Company Image
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
                                color="secondary" 
                                type="submit"
                                variant="outlined" 
                                style={{margin: '20px',marginTop: "30px", letterSpacing: "2px",float: "right" }}
                                onSubmit={handleSubmit}
                            >
                                Submit
                            </Button>
                            </form>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5}>

                            {
                                props.adminProfile.companyProfile === null ? '' : (
                                    <React.Fragment>
                                        <Card align="center" style={{padding: "20px", margin: "10px", marginTop: "100px"}}>
                                            <Avatar className={classes.avatar}>
                                                <PersonIcon style={{width: '100px', height: '100px'}}/>
                                            </Avatar>
                                            <CardContent>
                                                <Typography variant="h5" style={{padding: '20px',letterSpacing: "2px"}}>
                                                    {props.adminProfile.companyProfile.companyName}{' '}
                                                     / {' '} { props.adminProfile.companyProfile.companyType }
                                                </Typography>
                                                <Typography variant="h6"style={{padding: '20px', letterSpacing: "2px"}}>
                                                    {props.adminProfile.companyProfile.ownerName}{' '} 
                                                        /{' '} { props.adminProfile.companyProfile.since}
                                                </Typography>
                                                <Typography variant="body1"style={{padding: '20px', letterSpacing: "2px"}}>
                                                    Located at : {' '} {props.adminProfile.companyProfile.locatedAt.map(location => location).join(',')}
                                                </Typography>
                                                <Typography varient="caption" style={{padding: '20px', letterSpacing: "2px"}}>
                                                    {props.adminProfile.companyProfile.discription}
                                                </Typography>
                                                <Typography varient="subtitle2" style={{padding: '20px', letterSpacing: "2px"}}>
                                                    You Have {props.adminProfile.companyProfile.productCount} Product
                                                </Typography>
                                                <Typography varient="subtitle2" style={{padding: '20px', letterSpacing: "2px"}}>

                                                    {
                                                        props.adminProfile.companyProfile.social !== null ? (
                                                            <React.Fragment>
                                                                Youtube: {props.adminProfile.companyProfile.social.youtube} <br />
                                                                    Facebook: {props.adminProfile.companyProfile.social.facebook} <br />
                                                                        Instagram: {props.adminProfile.companyProfile.social.instagram} <br />
                                                                    Linkedin: {props.adminProfile.companyProfile.social.linkedin} <br />
                                                                Twitter: {props.adminProfile.companyProfile.social.twitter}
                                                            </React.Fragment>
                                                        ) : ''
                                                    }
                        
                                                </Typography>
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
    );
}

AdminEditProfile.propTypes = {
    error: PropTypes.object.isRequired,
    adminAuth: PropTypes.object.isRequired,
    adminProfile: PropTypes.object.isRequired,
    setAdminProfile: PropTypes.func.isRequired,
    getAdminProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    error: state.error,
    adminAuth: state.adminAuth,
    adminProfile: state.adminProfile
});

export default connect(mapStateToProps, {setAdminProfile,getAdminProfile} )(AdminEditProfile);
