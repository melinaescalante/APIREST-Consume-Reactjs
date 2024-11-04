import React from "react";
import { useState } from "react";
import Button from "./Button";
function RouteContainer(props) {
    
    return (
        <section className=" mt-4">
            <h1 className="text-2xl font-medium m-4">
                Lista endPoints de {props.name} 
            </h1>
            
            <div className="flex flex-wrap flex-col justify-center items-center text-start border border-slate-200 rounded-lg">{props.children}</div>
        </section>
    );
}
export default RouteContainer;
