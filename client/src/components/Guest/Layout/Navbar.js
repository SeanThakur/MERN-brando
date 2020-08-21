import React from 'react';
import {setLogout} from '../../../redux/actions/authGuestActions';
import {setAdminLogout} from "../../../redux/actions/authAdminActinons";
import {clearCurrentAccount} from "../../../redux/actions/Guest/accountActions";
import {clearAdminProfile} from "../../../redux/actions/Admin/adminProfileActions";
import {setClearAdminTieupProfile} from "../../../redux/actions/Admin/adminTieupProfileActions";
import PropTypes from 'prop-types';
import { connect } from "react-redux"

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Brightness6, Brightness7} from "@material-ui/icons";
import Tooltip from '@material-ui/core/Tooltip';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {animateScroll as scroll} from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(4),
    marginLeft: theme.spacing(4),
    width: '25%'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '15rem',
  },
  sectionDesktop: {
    display: 'block',
  },
}));

function Navbar(props) {
  const classes = useStyles();

  const isAuth = props.auth.isAuth;
  const user   = props.auth.user;

  const isAdmin = props.adminAuth.isAdmin;
  const adminUser = props.adminAuth.user;

  const handleLogout = (e) => {
    e.preventDefault();
    props.setLogout();
    props.clearCurrentAccount();
  }

  const handleAdminLogout = (e) => {
    e.preventDefault();
    props.setAdminLogout();
    props.clearAdminProfile();
    props.setClearAdminTieupProfile();
  }

  const authLink = (
    <React.Fragment>
        <Tooltip title="Wishlist">
                <IconButton color="inherit">
                  <FavoriteIcon />
                </IconButton>
          </Tooltip>
          <Tooltip title="Cart">
                <IconButton color="inherit">
                  <ShoppingCartIcon />
                </IconButton>
          </Tooltip>
          <div className={classes.sectionDesktop}>
            <Button onClick={handleLogout} style={{color: "white"}}>
              Logout
            </Button>
          </div>
          <div className={classes.sectionDesktop}>
            <Tooltip title={user.username}>
              <IconButton
                edge="end"
                color="inherit"
                href="/account"
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </div>
      </React.Fragment>
  );

  const guestLink = (
    <React.Fragment>
      <div className={classes.sectionDesktop}>
        <Button href="/register" style={{color: "white"}}>
          Register
        </Button>
      </div>
      <div className={classes.sectionDesktop}>
        <Button href="/login" style={{color: "white"}}>
          Login
        </Button>
      </div>
    </React.Fragment>
  );

  const authAdminLink = (
    <React.Fragment>
          <div className={classes.sectionDesktop}>
            <Button onClick={handleAdminLogout} style={{color: "white"}}>
              Logout
            </Button>
          </div>
          <div className={classes.sectionDesktop}>
            <Tooltip title={adminUser.username}>
              <IconButton
                edge="end"
                color="inherit"
                href="/admin/profile"
              >
                <AccountCircle />
              </IconButton>
            </Tooltip>
          </div>
      </React.Fragment>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed">
        <Toolbar>
            <Button onClick={() => scroll.scrollToTop()} className={classes.title} style={{color: "white", fontWeight: "bold", letterSpacing: "2px", fontSize: "17px"}}>
              BrandO
            </Button>
            {
              isAdmin === false ? (
                <React.Fragment>
                  <Button href="/allcompanies" style={{color: "white", fontWeight: "bold", letterSpacing: "1.5px", fontSize: "12px"}}>
                    COMPANY
                  </Button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Button href="/admin" style={{color: "white", fontWeight: "bold", letterSpacing: "1.5px", fontSize: "12px"}}>
                    Admin
                  </Button>
                  <Button href="/admin/alltieups" style={{color: "white", fontWeight: "bold", letterSpacing: "1.5px", fontSize: "12px"}}>
                    All Tieups
                  </Button>
                </React.Fragment>
              )
            }
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />

          {
            isAdmin === true ? ' ' : isAuth === false && guestLink
          } 

          { 

          props.themeMode === "light" ? 
            (
              <Tooltip title="Dark Mode">
                <IconButton color="inherit" onClick={props.darkMode}>
                  <Brightness6 />
                </IconButton>
              </Tooltip>
            ) : 
           (
            <Tooltip title="Light Mode">
              <IconButton  color="inherit" onClick={props.lightMode}>
                    <Brightness7 />
              </IconButton>
            </Tooltip>
            )

          }

          {
            isAuth === true && authLink
          }

          {
            isAdmin === true && authAdminLink
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  setLogout: PropTypes.func.isRequired,
  setAdminLogout: PropTypes.func.isRequired,
  clearCurrentAccount: PropTypes.func.isRequired,
  clearAdminProfile : PropTypes.func.isRequired,
  setClearAdminTieupProfile: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  adminAuth: state.adminAuth
});

export default connect(mapStateToProps, {setLogout,setAdminLogout,clearCurrentAccount,clearAdminProfile,setClearAdminTieupProfile})(Navbar);