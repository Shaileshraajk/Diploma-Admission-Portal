import React from 'react';
import Home from './pages/Home';
import {StyledContainer} from './components/Styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



function App() {
  return (
    <Router>
      <StyledContainer>
        <Home />
      </StyledContainer>
    </Router>
    
  );
}

export default App;
