import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import {setAdminTieupProfileProduct} from "../../../redux/actions/Admin/adminTieupProfileActions";

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Typography} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

function AdminTieupProduct(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [discription, setDiscription] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

    const handleDiscriptionChange = (e) => {
        setDiscription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProfileProduct = {
            name,
            price,
            discription
        }
        props.setAdminTieupProfileProduct(props.match.params.tieupCompany_id, newProfileProduct, window.location);
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
                                CREATE TIEUP PRODUCT
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

AdminTieupProduct.propTypes = {
    adminProfile: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    adminProfile: state.adminProfile,
})

export default connect(mapStateToProps, {setAdminTieupProfileProduct})(AdminTieupProduct);
