import React from "react";
import { useState } from "react";
import Button from "./Button";
function RouteContainer(props) {
    
    return (
        <section className="  mt-4">
            <h3 className="text-xl text-start font-medium m-4 ms-0 ">
                Lista endPoints de {props.name} 
            </h3>
            
            <div className="flex flex-wrap flex-col justify-center items-center text-start border border-slate-200 rounded-lg">{props.children}</div>
        </section>
    );
}
export default RouteContainer;
