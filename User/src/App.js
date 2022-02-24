import React from 'react';
import './App.css';
import Navbar from './Useracademy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Institute from './pagesUser/institue';
import Home from './pagesUser/home';
import Course from './pagesUser/course';
import logout from './pagesUser/logout';
import CourseEnrolled from './pagesUser/courseenrolled';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		 <Route path='/' exact component={Home}/>
		 <Route path='/home' component={Home}/>
		<Route path='/institute' component={Institute} />
		<Route path='/course' component={Course} />
		<Route path='/courseenrolled' component={CourseEnrolled} />
		<Route path='/logout' component={logout} />
	</Switch>

	</Router>
  
);
}

export default App;
