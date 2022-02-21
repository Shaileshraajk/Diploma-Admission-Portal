import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import UserAdded from './pages/UserAdded'
import UsernotAdded from './pages/UsernotAdded';

import {StyledContainer} from './components/Styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
//Loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  return (
    <Router>
      <StyledContainer>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/useradded">
            <UserAdded />
          </Route>
          <Route path="/usernotadded">
            <UsernotAdded />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </StyledContainer>
    </Router>
    
  );
}

export default App;
