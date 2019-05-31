import React from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const OpenTimes = (props) => {

    const spaceStyle = {
        wordSpacing: '30px'
    }
    

    return(
        <div className="boxTimeOne">
           <div className="openTimes" onClick={props.onClickHandel}> 
            <span style={spaceStyle}><FontAwesomeIcon icon="clock" className="icon" /> </span> 
            <span>Open Now · {props.info.openTimes.sunday[0]} - {props.info.openTimes.sunday[1]}  <FontAwesomeIcon icon="chevron-down"  /></span>
                <div className="addTimes" style={props.styling}>
                <br/>Monday.......... {props.info.openTimes.monday[0]} - {props.info.openTimes.monday[1]}
                <br/>Tuesday.......... {props.info.openTimes.tuesday[0]} - {props.info.openTimes.tuesday[1]}
                <br/>Wednesday...... {props.info.openTimes.wednesday[0]} - {props.info.openTimes.wednesday[1]}
                <br/>Thursday........ {props.info.openTimes.thursday[0]} - {props.info.openTimes.thursday[1]}
                <br/>Friday............ {props.info.openTimes.friday[0]} - {props.info.openTimes.friday[1]}
                <br/>Saturday......... {props.info.openTimes.sunday[0]} - {props.info.openTimes.sunday[1]}
                <br/>Sunday........... {props.info.openTimes.sunday[0]} - {props.info.openTimes.sunday[1]}
                </div>
           </div>
           
        </div>
    )


}

export default OpenTimes;