import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {Provider} from "react-redux";
import store from "./redux/store";

import {setCurrentUser, setLogout} from "./redux/actions/authGuestActions";
import {setCurrentAdminUser, setAdminLogout} from "./redux/actions/authAdminActinons";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";

//Screen Components

//* Guest Auth Screen Components *//
import Login from "./components/Guest/Screens/Auth/Login";
import Register from "./components/Guest/Screens/Auth/Register";
import ForgetPassword from "./components/Guest/Screens/Auth/ForgetPassword";
//* Guest Auth Screen Components *//
import ALogin from './components/Admin/Screens/Auth/ALogin';
import ARegister from './components/Admin/Screens/Auth/ARegister';

import AdminProfile from './components/Admin/Screens/AdminProfile';
import AdminEditProfile from './components/Admin/Screens/AdminEditProfile';
import AdminProduct from './components/Admin/Screens/AdminProduct';
import AdminTieupProfile from './components/Admin/Screens/AdminTieupProfile';
import AdminAllTieups from './components/Admin/Screens/AdminAllTieups';
import AdminTieupProduct from './components/Admin/Screens/AdminTieupProduct';
import AdminMain from './components/Admin/Screens/AdminMain';

//PrivateRoute
import PrivateRoute from './utils/PrivateRoute.js';
//Admin PrivateRoute
import AdminPrivateRoute from './utils/AdminPrivateRoute';

//Layout Components
//* Guest Layout Components *//
import Navbar from "./components/Guest/Layout/Navbar";
import Footer from "./components/Guest/Layout/Footer";
import Landing from "./components/Guest/Layout/Landing";

import Account from './components/Guest/Screens/Account';
import EditAccount from './components/Guest/Screens/EditAccount';
import AllCompanies from './components/Guest/Screens/AllCompanies'
import Companies from './components/Guest/Screens/Companies';
import AllProducts from './components/Guest/Screens/AllProducts';
import Product from './components/Guest/Screens/Product';

if(localStorage.jwtGuestToken)
{
  //Checking if token present in localstorage then login persist
  setAuthToken(localStorage.jwtGuestToken);
  const decoded = jwt_decode(localStorage.jwtGuestToken);
  store.dispatch(setCurrentUser(decoded));
  //logout the user
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime)
  {
    store.dispatch(setLogout());
    window.location.href = '/login';
  }
}

if(localStorage.jwtAdminToken)
{
  //Checking if token present in localstorage then login persist
  setAuthToken(localStorage.jwtAdminToken);
  const decoded = jwt_decode(localStorage.jwtAdminToken);
  store.dispatch(setCurrentAdminUser(decoded));
  //logout the user
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime)
  {
    store.dispatch(setAdminLogout());
    window.location.href = '/admin/login';
  }
}

function App() {
  
  //Setting up the Theme Mode as Default to Light
  const [themeMode, setThemeMode] = useState(getDarkMode());

  //Creating Theme Template 
  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: {
        main: themeMode === 'light' ? "#3f51b5" : "#111"
      },
      secondary: {
        main: themeMode === 'light' ? "#3f51b5" : "#ff5722"
      }
    }
  });

  const handleLightMode = () => {
    document.querySelector("body").style.backgroundColor = "#fff";
    setThemeMode("light");
  }

  const handleDarkMode = () => {
    document.querySelector("body").style.backgroundColor = "#111";
    setThemeMode("dark");
  }

  //Setting Theme mode presistent by saving to localstorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(themeMode));
  }, [themeMode]);

  function getDarkMode() {
    const savedMode = JSON.parse(localStorage.getItem('darkMode'));
    return savedMode || 'light';
  }

    return (
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <div className="App">
              <Navbar themeMode={themeMode} lightMode={handleLightMode} darkMode={handleDarkMode} />
                {/* Guest Route  */}
                <Route exact path="/" component={Landing} />
                <Switch>
                  <PrivateRoute exact path="/account" component={Account} />
                </Switch>
                <Switch>
                  <PrivateRoute exact path="/edit-account" component={EditAccount} />
                </Switch>
                <Route exact path="/allcompanies" component={AllCompanies} />
                <Route exact path="/allproducts" component={AllProducts} />
                <Route exact path="/company" component={Companies} />
                <Route exact path="/product" component={Product} />
                <Route exact path="/forget-password" component={ForgetPassword} />
                <Route exact path="/login" component={Login} />
                {/* WishList and Cart Route */}
                <Route exact path="/register" component={Register} />

                {/* Admin route  */}
                <Route exact path="/admin/register" component={ARegister} />
                <Route exact path="/admin/login" component={ALogin} />
                <Switch>
                  <AdminPrivateRoute exact path="/admin/profile" component={AdminProfile} />
                  <AdminPrivateRoute exact path="/admin/edit-profile" component={AdminEditProfile} />
                  <AdminPrivateRoute exact path="/admin/product" component={AdminProduct} />
                  <AdminPrivateRoute exact path="/admin/tieup-profile/:id" component={AdminTieupProfile} />
                  <AdminPrivateRoute exact path="/admin/alltieups" component={AdminAllTieups} />
                  <AdminPrivateRoute exact path="/admin/tieup-product/:tieupCompany_id" component={AdminTieupProduct} />
                  <AdminPrivateRoute exact path="/admin" component={AdminMain} />
                </Switch>
              <Footer />
            </div>
          </ThemeProvider>
        </Router>
      </Provider>
    );
}

export default App;
