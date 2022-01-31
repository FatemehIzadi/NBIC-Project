import React from "react";
import NavigationBar from "../Navbar";
import ReactAudioPlayer from 'react-audio-player';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'


class RecordVoice extends React.Component {
    constructor(props) {
        super(props)
     
        this.state = {
          recordState: null
        }
      }
     
      start = () => {
        this.setState({
          recordState: RecordState.START
        })
      }
     
      stop = () => {
        this.setState({
          recordState: RecordState.STOP
        })
      }
     
      //audioData contains blob and blobUrl
      onStop = (audioData) => {
        console.log('audioData', audioData)
      }
    render() {
        const { recordState } = this.state

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
            {/* <ReactAudioPlayer
                src='../voice/story1.html'
                autoPlay
                controls
            /> */}
            {/* <Recorder/> */}

            
        <AudioReactRecorder state={recordState} onStop={this.onStop} />
 
 <button onClick={this.start}>Start</button>
 <button onClick={this.stop}>Stop</button>
        </div>

    );
        }
}

export default RecordVoice;