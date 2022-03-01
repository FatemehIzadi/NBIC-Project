import React from "react";
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
import {Card, Button, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
import '../../Assets/styles/recordVoice/RecordVoice.css'

class RecordVoice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          recordState: null,
          audioData: null
        }
        // ,
        // this.currState = {
        //   isRecording: false
        // }
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
     
      onStop = (data) => {
        this.setState({
          audioData: data
        })
        console.log('onStop: audio data', data)
      }

    render() {
        const { recordState } = this.state

    return(
        <div>
        <div className="recordVoice-main">
        <Card className="main-recordVoice-card text-center">
            <Card.Body>
                <div className='voiceRecorder'
                // hidden
                // = {this.props.hideVoiceRecorder}
                >
                
                <AudioReactRecorder 
                state={recordState} 
                onStop={this.onStop} 
                canvasWidth = '0'
                canvasHeight = '0'
                hidden = {recordState!==RecordState.STOP}
                />

                {this.state.recordState===null &&
                <div>
                <p className='text-center' dir="rtl">
                   دکمه ضبط صدا رو بزنید و سعی کنید بخشی از داستان رو که شنیدید، تا آنجا که در خاطر دارید بازگو کنید.
                </p>     
                <Button className='recordButton'
                onClick={this.start}
                hidden
                ={this.props.hidden}
                >
                شروع
                </Button>
                </div>
               }
               
                {this.state.recordState===RecordState.START &&
                <div>
                <Image 
                src={require('../../Assets/images/recordGif.gif')} 
                alt="Responsive image"
                width="120"
                className="mx-auto d-block" 
                />
                <Button className='stopButton'
                onClick={this.stop}
                >
               پایان
                </Button>
                <br/>
                <br/>
                </div>
               }

                {this.state.recordState===RecordState.STOP &&
                <div>
                <audio
                id='audio'
                controls
                src={this.state.audioData ? this.state.audioData.url : null}
                >
                </audio>
                
                <br/>
                <br/>
                <Button className='recordButton'
                onClick={this.start}
                hidden
                ={this.props.hidden}
                >
                 شروع مجدد
                </Button>
                <br/>
                <br/>
                <Link to='/thankYou'>
                  <Button className='sendButton'
                >
               ارسال
                </Button>
                </Link>
                
                </div>
                }
 
            </div>

            </Card.Body> 
        </Card>
    </div>

        </div>
    );
        }
}

export default RecordVoice;

// import React from 'react'

// import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
// import 'audio-react-recorder/dist/index.css'

// class RecordVoice extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       recordState: null,
//       audioData: null
//     }
//   }

//   start = () => {
//     this.setState({
//       recordState: RecordState.START
//     })
//   }

//   pause = () => {
//     this.setState({
//       recordState: RecordState.PAUSE
//     })
//   }

//   stop = () => {
//     this.setState({
//       recordState: RecordState.STOP
//     })
//   }

//   onStop = (data) => {
//     this.setState({
//       audioData: data
//     })
//     console.log('onStop: audio data', data)
//   }

//   render() {
//     const { recordState } = this.state

//     return (
//       <div>
//         <AudioReactRecorder
//           state={recordState}
//           onStop={this.onStop}
//           backgroundColor='rgb(255,255,255)'
//         />
//         <audio
//           id='audio'
//           controls
//           src={this.state.audioData ? this.state.audioData.url : null}
//         ></audio>
//         <button id='record' onClick={this.start}>
//           Start
//         </button>
//         <button id='pause' onClick={this.pause}>
//           Pause
//         </button>
//         <button id='stop' onClick={this.stop}>
//           Stop
//         </button>
//       </div>
//     )
//   }
// }

// export default RecordVoice
