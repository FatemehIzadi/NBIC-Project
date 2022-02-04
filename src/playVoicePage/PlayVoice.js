import React from "react";
import NavigationBar from "../Navbar";
import ReactAudioPlayer from 'react-audio-player';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
import Story from '../voice/story1.mp3';
import {Card, Button, Image} from 'react-bootstrap';

import './PlayVoice.css';


class PlayVoice extends React.Component {

    state = {
        audio: new Audio(Story),
        isPlaying: false,
      };
    
      // Main function to handle both play and pause operations
      playPause = () => {
    
        // Get state of song
        let isPlaying = this.state.isPlaying;
    
        if (isPlaying) {
          // Pause the song if it is playing
          this.state.audio.pause();
        } else {
    
          // Play the song if it is paused
          this.state.audio.play();
        }
    
        // Change the state of song
        this.setState({ isPlaying: !isPlaying });
      };

    render() {
    return(
        <div className="playVoice-main">
        <Card className="mb-3 main-playVoice-card text-center">
            <Card.Body>
                <div className='voicePlayer'
                // hidden
                // = {this.props.hideVoicePlayer}
                > 
            </div>

              
            {!this.state.isPlaying &&
            
            <div>
              <p dir="rtl"> 
            با فشردن دکمه پخش، فایل صوتی را بادقت بشنوید. 
              </p> 

              

              <Button className='playButton' onClick={this.playPause}>
                پخش
              </Button> 

              </div>
              }


            <br />
                

            {this.state.isPlaying &&
            <div className="voiceImage">
                <Image 
                src={require('../images/playGif.gif')} 
                alt="voice" 
                width="200"
                className="mx-auto d-block" alt="Responsive image"
                />
            </div>
            }

            </Card.Body> 
        </Card>
    </div>

    );
        }
}

export default PlayVoice;