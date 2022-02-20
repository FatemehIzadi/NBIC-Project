import React from "react";
import AudioReactRecorder, { RecordState } from 'audio-react-recorder';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
import './RecordVoice.css'

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
        <div className="recordVoice-main">
        <Card className="mb-3 main-recordVoice-card text-center">
            <Card.Body>
                <div className='voiceRecorder'
                // hidden
                // = {this.props.hideVoiceRecorder}
                >
                <p className='text-center' dir="rtl">
                   دکمه ضبط صدا رو بزنید و سعی کنید بخشی از داستان رو که شنیدید، تا آنجا که در خاطر دارید بازگو کنید.
                </p>            
                <AudioReactRecorder 
                state={recordState} 
                onStop={this.onStop} 
                />
                {this.state.recordState===null &&
                <Button className='recordButton'
                onClick={this.start}
                hidden
                ={this.props.hidden}
                >
                شروع
                </Button>
               }
                {this.state.recordState===RecordState.START &&
                <div>
                <Link to='/thankYou'>
                <Button className='stopButton'
                onClick={this.stop}
                hidden
                ={this.props.hidden}
                >
                پایان
                </Button>
                </Link>
                <br/>
                <br/>
                <Button className='recordButton'
                onClick={this.start}
                hidden
                ={this.props.hidden}
                >
                 شروع مجدد
                </Button>
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