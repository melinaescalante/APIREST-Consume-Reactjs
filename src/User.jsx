import React from "react";

function User({name, email, age}){
  //Forma larga de destructurizar
    // const name= props.name
    // const email= props.email
    // const age= props.age
return(<div className="p-2 m-2 border rounded-lg border-blue-900">
    <h4 className="font-medium text-lg ">{name}</h4>
    <p>Email {email}</p>
    <p>Edad {age}</p>
</div>)
}
export default User