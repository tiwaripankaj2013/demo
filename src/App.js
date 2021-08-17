import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import DashBoard from './component/pages';

function App() {
  return (
    <Router>
      <DashBoard/>
    </Router>
  );
}

export default App;
