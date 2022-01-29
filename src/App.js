import React from 'react';
import NavigationBar from './Navbar';
import Instructions from './instructionsPage/Instructions';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <div className='nbicApp'>
      <NavigationBar/>
      <Instructions/>
      </div>
  );
}

export default App;