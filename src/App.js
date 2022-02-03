import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import CollegeCreate from './components/CollegeCreate';
import CollegeDetails from './components/CollegeDetails'
import CollegeList from './components/CollegeList';
import Home from './components/Home'
import CollegeSearch from './components/CollegeSearch'
import CollegeUpdate from './components/CollegeUpdate'

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/list">List</Link></li>
          <li><Link to="/details">College Details</Link></li>
          <li><Link to="/create">College Create</Link></li>
          <li><Link to="/search">College Search</Link></li>
          <li><Link to="/update">College Update</Link></li>
        </ul>
        <Route path="/list">
          <CollegeList />
        </Route>
        <Route path="/details">
          <CollegeDetails />
        </Route>
        <Route path="/create">
          <CollegeCreate />
        </Route>
        <Route path="/search">
          <CollegeSearch />
        </Route>
        <Route path="/update">
          <CollegeUpdate />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Router> 
    </div>
  );
}

export default App;
