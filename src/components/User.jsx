import React from "react";

function User(props){
return(<div className="p-2 m-2 border rounded-lg border-cyan-400">
    <h4>{props.texto}</h4>
    <p>Edad {props.edad}</p>
</div>)
}
export default User