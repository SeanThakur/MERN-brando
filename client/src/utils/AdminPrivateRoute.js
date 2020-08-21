import React from 'react'
import {Route,Redirect} from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from "react-redux"

const AdminPrivateRoute = ({component : Component, adminAuth, ...rest}) => (
    <Route 
        {...rest}
        render = {
            props => 
                adminAuth.isAdmin === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
        }
    />
);

AdminPrivateRoute.propTypes = {
    adminAuth: PropTypes.object.isRequired,
}
  
const mapStateToProps = (state) => ({
    adminAuth: state.adminAuth
});

export default connect(mapStateToProps)(AdminPrivateRoute);
