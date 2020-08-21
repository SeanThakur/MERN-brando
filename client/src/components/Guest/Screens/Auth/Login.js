import React , {useState, useEffect} from 'react';
import {setLogin} from '../../../../redux/actions/authGuestActions';
import PropTypes from 'prop-types';
import { connect } from "react-redux"

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login(props) {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if(props.error.user)
    {
      setError(props.error.user);
    }
  }, [props.error.user])

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      email,
      password
    }

    props.setLogin(newUser);

  }

  useEffect(() => {
    if(props.auth.isAuth === true)
    {
      window.location.href = "/account"
    }
  }, [props.auth.isAuth])

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{padding: '30px'}} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                color="secondary"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
            <Typography variant="subtitle2" style={{color: "red", fontWeight: "bold", letterSpacing: "1.5px"}}>
                {
                  error
                }
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="secondary"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onSubmit={handleSubmit}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
}

Login.propTypes = {
  setLogin: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.error
})

export default connect(mapStateToProps, {setLogin})(Login);