import React from "react";
import Story from '../../Assets/voice/story1.mp3';
import { Card, Button, Image } from 'react-bootstrap';
import  { Navigate } from 'react-router-dom';

import '../../Assets/styles/playVoice/PlayVoice.css';

class PlayVoice extends React.Component {

    state = {
        audio: new Audio(Story),
        isPlaying: false,
        hasEnded: false
      };

      componentDidMount = () => {
        this.state.audio.addEventListener('ended', () => this.setState({ hasEnded: true }));
      };
      
      componentWillUnmount = () => {
        this.state.audio.removeEventListener('ended', () => this.setState({ hasEnded: true }));  
      };
    
      play = () => {
        let isPlaying = this.state.isPlaying;
        // if (isPlaying) {
        //   this.state.audio.pause();
        // } else {
          this.state.audio.play();
        // }
        this.setState({ isPlaying: !isPlaying });
      };

    render() {
    return(
        <div className="playVoice-main">
        <Card className="main-playVoice-card text-center">
            <Card.Body>
                <div className='voicePlayer'
                // hidden
                // = {this.props.hideVoicePlayer}
                > 
            </div>

            {!this.state.isPlaying &&
            <div>
              <p className="text-center" dir="rtl"> 
            با فشردن دکمه پخش، فایل صوتی را بادقت بشنوید. 
              </p> 
              <Button className='playButton' onClick={this.play}>
                پخش
              </Button> 
              </div>
              }

            <br />
                
            {this.state.isPlaying && !this.state.hasEnded &&
            <div className="voiceImage">
                <Image 
                src={require('../../Assets/images/playGif.gif')} 
                alt="Responsive image"
                width="120"
                className="mx-auto d-block" 
                />
            </div>
            }

            {this.state.hasEnded &&
            <Navigate from='/playVoice' to='/recordVoice' />
            } 

            </Card.Body> 
        </Card>
    </div>

    );
        }
}

export default PlayVoice;