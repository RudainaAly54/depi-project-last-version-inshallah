<<<<<<< HEAD
import React from "react";


const Awarencecard = (props) => {
    return (<div className="m-5 border-2 border-gray-300 rounded-lg w-80 p-4 ">
        <props.icon style={{ color: props.color }} className="w-6 h-6" />
        <h3 style={{ color: props.color }} className="font-bold text-lg mb-1">
            {props.title}
        </h3>
        <p className="text-gray-700">{props.description}</p>
    </div>)
};
=======
import React from "react";


const Awarencecard = (props) => {
    return (<div className="m-5 border-2 border-gray-300 rounded-lg w-80 p-4 ">
        <props.icon style={{ color: props.color }} className="w-6 h-6" />
        <h3 style={{ color: props.color }} className="font-bold text-lg mb-1">
            {props.title}
        </h3>
        <p className="text-gray-700">{props.description}</p>
    </div>)
};
>>>>>>> 01c123bc57e31401aa3b9e5d1f67dee9e1186cb0
export default Awarencecard;