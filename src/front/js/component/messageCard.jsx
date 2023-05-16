import React from "react";
import "../../styles/messageCard_style.css";


const MessageCard = (props) =>{

    
        



    return(
        <div className="message_card card m-3">
            <img src="https://t4.ftcdn.net/jpg/04/66/53/61/360_F_466536165_NpczyjAW8tsL3EJ8s5RTLoAHaNB0lgwR.jpg" className="messagecard-img-left" alt="..."/>
            <div className="message-card-body">
                <h5 className="message-card-name">{props.farmer_id}</h5>
                <p className="message-card-text">{props.date} </p>
                <p className="message-card-text">{props.message} </p>
                
                {/* <button onClick={handleDelete} className="card-text">
                    Delete
                </button> */}
            </div>
        </div>
    )
};

export default MessageCard;