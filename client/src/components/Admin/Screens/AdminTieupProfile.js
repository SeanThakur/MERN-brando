import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {setAdminTieupProfile} from "../../../redux/actions/Admin/adminTieupProfileActions";

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

function AdminTieupProfile(props) {

    // useEffect(() => {
    //     if(props.match.params.id) {

    //     }
    // }, [props.match.params.id])

    const [companyName, setCompanyName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [discription, setDiscription] = useState('');
    const [companyType, setCompanyType] = useState('Private');

    const handleRadioChange = (event) => {
        setCompanyType(event.target.value);
    };

    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
    }

    const handleOwnerNameChange = (e) => {
        setOwnerName(e.target.value);
    }

    const handleDiscriptionChange = (e) => {
        setDiscription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTieUpProfile = {
            companyName,
            ownerName,
            discription,
            companyType
        }
        props.setAdminTieupProfile(props.match.params.id, newTieUpProfile, window.location);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12} sm={12}> 
                        <Card style={{padding: "60px", margin: "10px", marginTop: "100px"}}>
                            <Typography variant="h5" style={{ letterSpacing: "2px", fontWeight:"bold"}}>
                                CREATE TIEUP PROFILE
                            </Typography>
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
                                        <FormLabel style={{fontSize: "18px", letterSpacing: "1.5px", fontWeight: "bold"}}>Company Type</FormLabel>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <RadioGroup name="companyType" value={companyType} onChange={handleRadioChange} style={{flexDirection: 'row'}}>
                                            <FormControlLabel value="Private" control={<Radio />} label="Private Company" /> {' '}
                                            <FormControlLabel value="Government" control={<Radio />} label="Government Company" />
                                        </RadioGroup>
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
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

AdminTieupProfile.propTypes = {
    adminTieupProfile: PropTypes.object.isRequired,
    setAdminTieupProfile: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    adminTieupProfile: state.adminTieupProfile,
});

export default connect(mapStateToProps,{setAdminTieupProfile})(AdminTieupProfile);
