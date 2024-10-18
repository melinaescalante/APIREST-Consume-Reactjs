import React from "react";

function Card(props){
return(<div>
    <h4>{props.texto}</h4>
    <p>Edad {props.edad}</p>
</div>)
}
export default Card