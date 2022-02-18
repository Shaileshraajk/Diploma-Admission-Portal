import React from 'react';
import './App.css';
import Navbar from './Useracademy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Institute from './pages/institute';
import Course from './pages/course';
import logout from './pages/logout';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		 <Route path='/' exact component={Home}/>
		 <Route path='/home' component={Institute}/>
		<Route path='/institute' component={Home} />
		<Route path='/course' component={Course} />
		
		<Route path='/logout' component={logout} />
	</Switch>

	</Router>
  
);
}

export default App;
