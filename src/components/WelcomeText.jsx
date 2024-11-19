import React from "react";


function WelcomeText({ title, description }) {
    return (
        <div className=" text-start mb-12 lg:max-w-[70%] md:w-full">
            <h2 className="font-medium text-xl  ms-0 m-3">{title}</h2>
            <p className="text-start">{description}
            </p>
            
        </div>
    );
}
export default WelcomeText;
