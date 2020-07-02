import React,{useState} from 'react';
import './Comment.css';


const Comment = (props) => {
    if(props.reply===""){
    return(
        <div id={props.id+"_container"}>
            <div id={props.id+"_comment"}>
                <p>{props.comment}</p>
            </div>
        </div>
    )
    }else{
        return(
        <div id={props.id+"_container"}>
            <div id={props.id+"_comment"}>
                <p>{props.comment}</p>
            </div>
            <div id={props.id+"_reply"}>
                <p>{props.reply}</p>
            </div>
        </div>
        )
    }
}

export default Comment;