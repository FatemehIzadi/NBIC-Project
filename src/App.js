import React from 'react';
import NavigationBar from './Components/navbar/Navbar';
import Instructions from './Components/instructions/Instructions';
import PlayVoice from './Components/playVoice/PlayVoice';
import RecordVoice from './Components/recordVoice/RecordVoice';
import ThankYou from './Components/thankYou/ThankYou';
import {Routes , Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component{

  componentDidMount(){
    document.title = "Alpaca voice test"
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     atInstructionPage: false,
  //     atPlayPage: false,
  //     atRecordPage: false,
  //     atThanksPage: false
  //   }
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
