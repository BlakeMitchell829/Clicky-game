import React from "react";
import "./Title.css";

const Title = props => (
    <div className="title">
        <h1 className="title">Clicky Game</h1>
        <h1 className="title">High Score: {props.highScore}</h1> 
        <h1 className="title">Score: {props.score}</h1> 
        
    </div>
)



export default Title;