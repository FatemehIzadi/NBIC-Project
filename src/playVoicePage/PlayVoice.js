import React from "react";
import NavigationBar from "../Navbar";
import ReactAudioPlayer from 'react-audio-player';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import Story from '../voice/story1.mp3'
import Image from 'react-bootstrap/Image'


class PlayVoice extends React.Component {
    render() {
    return(
        <div>
            <NavigationBar />
            <p dir="rtl"> فایل صوتی زیر رو پلی کنید و به دقت بشنوید. </p>
            {/* <div id="PlayStory">  
            <p dir="rtl"> فایل صوتی زیر رو پلی کنید و به دقت بشنوید. </p>
            <audio controls id="PlayFirst" onplay="doDisappear()" onended="doRecording()">
                
                <source src="story1.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            
            </audio>
            </div> */}
            <ReactAudioPlayer
                src= {Story}
                autoPlay
                controls
            />

                    <Image 
                    src={require('../images/playGif.gif')} 
                    alt="nbic logo" 
                    width="100"
                    className="d-inline-block align-top"
                     />

            </div>

    );
        }
}
export default PlayVoice;