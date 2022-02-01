import React from "react";
import NavigationBar from "../Navbar";
import ReactAudioPlayer from 'react-audio-player';
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
// import Story from '../voice/story1.mp3'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

import './ThankYou.css'


class PlayVoice extends React.Component {
    render() {
    return(
        <div className="thanks-main">
        <Card className="mb-3 main-thanks-card text-center">
            <Card.Body>
                <div className='thanks'
                >
                <h2 dir="rtl"> 
            با تشکر از همراهی شما
                </h2> 
            </div>
            </Card.Body> 
        </Card>
    </div>

    );
        }
}

export default PlayVoice;