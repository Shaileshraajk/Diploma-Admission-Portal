import React from 'react';
import Navbar from './Adminacademy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminDashboard from './pagesAdmin/AdminDashboard';
import Institute from './pagesAdmin/institute';
import Course from './pagesAdmin/course';
import Home from './pages/Home';
import Students from './pagesAdmin/students'
import Logout from './pagesAdmin/logout';

function Admin () {
return (
	<Router>
	<Navbar />
	<Switch>
         <Route path='/admindashboard' component={AdminDashboard}/>
		<Route path='/institute' component={Institute} />
		<Route path='/course' component={Course} />
		<Route path='/students' component={Students}/>
		<Route path='/logout' component={Logout} />
	</Switch>

	</Router>
  
);
}

export default Admin;
