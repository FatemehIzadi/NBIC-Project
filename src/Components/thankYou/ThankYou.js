import React from "react";
import Card from 'react-bootstrap/Card'

import '../../Assets/styles/thankYou/ThankYou.css'


class ThankYou extends React.Component {
    render() {
    return(
        <div className="thanks-main">
        <Card className="main-thanks-card text-center">
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

export default ThankYou;