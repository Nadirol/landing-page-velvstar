import React from "react";

function Dot(props) {
    return (
        <div className="dot" id={props.id} onClick={() => ToSlide(Number(props.id))}>

        </div>
    )
}

export default Dot;