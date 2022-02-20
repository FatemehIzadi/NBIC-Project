import React from 'react';
import NavigationBar from './Navbar';
import Instructions from './instructionsPage/Instructions';
import PlayVoice from './playVoicePage/PlayVoice';
import RecordVoice from './recordVoice/RecordVoice';
import ThankYou from './thankYou/ThankYou';
import {BrowserRouter, Link, Routes , Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      atInstructionPage: false,
      atPlayPage: false,
      atRecordPage: false,
      atThanksPage: false
    }
  }

  // startApp = () => {
  //   let 
  // }


  render() {
  return (
    <div className='nbicApp'>

      <NavigationBar/>

      <Routes>
            <Route path='/' exact element={<Instructions/>} />
            <Route path='/playVoice' element={<PlayVoice />} />
            <Route path='/recordVoice' element={<RecordVoice />} />
            <Route path='/thankYou' element={<ThankYou />} />
      </Routes>
      </div>
  );
  }
}

export default App;
