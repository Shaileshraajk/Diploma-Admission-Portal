import React from 'react';
import './App.css';
import Navbar from './Adminacademy';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pagesAdmin/home';
import Institute from './pagesAdmin/institute';
import Course from './pagesAdmin/course';
import logout from './pagesAdmin/logout';
import Students from './pagesAdmin/students'
function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		 <Route path='/' exact component={Home}/>
		 <Route path='/home' component={Institute}/>
		<Route path='/institute' component={Home} />
		<Route path='/course' component={Course} />
		<Route path='/students' component={Students}/>
		<Route path='/logout' component={logout} />
	</Switch>

	</Router>
  
);
}

export default App;
