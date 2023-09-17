import React from "react";

function Individual(props:any){
    return(

        <div className="team-member">
        <img src={props.image} alt="Team"/>
        <h3>{props.name}</h3>
        <p>{props.position}</p>
        </div>

    )
}



export default Individual