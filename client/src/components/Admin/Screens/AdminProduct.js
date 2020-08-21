import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {setAdminProfileProduct} from "../../../redux/actions/Admin/adminProfileActions";

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
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

function AdminProduct(props) {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [launchingDate, setLaunchingDate] = useState('');
    const [discription, setDiscription] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    const handleLaunchingDateChange = (e) => {
        setLaunchingDate(e.target.value);
    }

    const handleDiscriptionChange = (e) => {
        setDiscription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            name,
            price,
            launchingDate,
            discription
        }
        props.setAdminProfileProduct(newProduct, window.location);
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12}> 
                        <Card style={{padding: "60px", margin: "10px", marginTop: "100px"}}>
                            <Typography variant="h5" style={{ letterSpacing: "2px", fontWeight:"bold"}}>
                            WELCOME {
                                        props.adminAuth.user.username
                                    } {' '} CREATE YOUR PRODUCT
                            </Typography>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <br />
                                    <TextField
                                        required
                                        id="name"
                                        name="name"
                                        label="Name"
                                        fullWidth
                                        color="secondary"
                                        variant="outlined"
                                        value={name}
                                        onChange={handleNameChange}
                                    />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                    <br />
                                    <TextField 
                                        required 
                                        color="secondary" 
                                        id="price" 
                                        name="price" 
                                        variant="outlined" 
                                        label="Price" 
                                        type="number"
                                        fullWidth 
                                        value={price}
                                        onChange={handlePriceChange}
                                    />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <br />
                                        <FormLabel  style={{fontSize: "18px", letterSpacing: "1.5px", fontWeight: "bold"}}>Launching On</FormLabel>
                                    </Grid>
                                    <Grid item xs={12}>
                                    <TextField 
                                        required 
                                        color="secondary" 
                                        id="launchingDate" 
                                        name="launchingDate" 
                                        variant="outlined" 
                                        type="date"
                                        fullWidth 
                                        value={launchingDate}
                                        onChange={handleLaunchingDateChange}
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
                                        <Button     
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<CloudUploadIcon />}
                                        >
                                            Upload Product Image
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
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}

AdminProduct.propTypes = {
    adminAuth: PropTypes.object.isRequired,
    adminProfile: PropTypes.object.isRequired,
    setAdminProfileProduct: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    adminProfile: state.adminProfile,
    adminAuth: state.adminAuth
})

export default connect(mapStateToProps,{setAdminProfileProduct})(AdminProduct);
