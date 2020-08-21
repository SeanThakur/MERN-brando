import React , {useState, useEffect} from 'react';
import {getRegister} from '../../../../redux/actions/authGuestActions';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

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
  forget: {
    margin: theme.spacing(1)
  }
}));

function Register(props) {

  const classes = useStyles();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState('others');
  const [error, setError] = useState([]);

  const handleRadioChange = (event) => {
      setGender(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() =>{
    if(props.error.email)
    {
      setError(props.error.email);
    }
  }, [props.error.email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password,
      gender
    }
    //console.log(newUser);
    // axios.post("/register", newUser).then(() => {
    //   window.location.href = "/login"
    // });
    props.getRegister(newUser, window.location);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{padding: '30px'}} className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                autoFocus
                color="secondary"
                value={username}
                onChange={handleUserNameChange}
              />
            </Grid>
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
                color="secondary"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
            <Grid item xs={12}>
                <br />
                <FormLabel style={{fontSize: "18px", letterSpacing: "1.5px", fontWeight: "bold"}}>Gender</FormLabel>
            </Grid>
            <Grid item xs={12}>
                <RadioGroup name="companyType" value={gender} onChange={handleRadioChange} style={{flexDirection: 'row'}}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" /> {' '}
                    <FormControlLabel value="female" control={<Radio />} label="Female" />{' '}
                    <FormControlLabel value="others" control={<Radio />} label="Others" />
                </RadioGroup>
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
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item sm={7} xs={12}>
              <Link color="secondary" href="/login" variant="body2" className={classes.forget}>
                Already have an account? Login
              </Link>
            </Grid>
            <Grid item sm={5} xs={12}>
              <Link color="secondary" href="/forget-password" variant="body2" className={classes.forget}>
                Forget Password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

Register.propTypes = {
  getRegister: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  error: state.error
})

export default connect(mapStateToProps, {getRegister})(withRouter(Register));