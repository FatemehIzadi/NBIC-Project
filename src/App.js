import React from 'react';
import './App.css';
import NavigationBar from './Navbar';
import InstructionsCard from './Instructions';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavigationBar/>
      <InstructionsCard/>
      </div>
  );
}
  
export default App;