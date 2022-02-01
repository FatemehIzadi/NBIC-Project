import React from "react";
import NavigationBar from "../Navbar";
import ReactAudioPlayer from 'react-audio-player';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import Story from '../voice/story1.mp3'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

import './PlayVoice.css'


class PlayVoice extends React.Component {
    render() {
    return(
        <div className="playVoice-main">
        <Card className="mb-3 main-playVoice-card text-center">
            <Card.Body>
                <div className='voicePlayer'
                // hidden
                // = {this.props.hideVoicePlayer}
                >
                <p dir="rtl"> 
                فایل صوتی زیر رو پلی کنید و به دقت بشنوید. 
                </p>    
                

                <ReactAudioPlayer
                src= {Story}
                controls
                />
            </div>

            <br />
                <div className="voiceImage"
                // hidden
                // = {this.props.hideImage}
                >
                <Image 
                src={require('../images/playGif.gif')} 
                alt="voice" 
                width="200"
                className="mx-auto d-block" alt="Responsive image"
                />
                </div>
            </Card.Body> 
        </Card>
    </div>

    );
        }
}

export default PlayVoice;