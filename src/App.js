import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import './styles/App.scss';
import LoginContainer from './containers/Login';
import SignupContainer from './containers/Signup';
import Dashboard from './containers/Dashboard';

function App() {
  return (
     <BrowserRouter>
      <div className="App">
        <Route path="/login" exact component={LoginContainer}/>
        <Route path="/signup" exact component={SignupContainer} />
        <Route path="/"  component={Dashboard} />
      </div>
     </BrowserRouter>
  );
}

export default App;