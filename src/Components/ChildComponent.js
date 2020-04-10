import React from "react";

function ChildComponent(props) {
    return(
        <div>
            <button onClick={()=>props.greetHandler('hamza')}>Greet parent</button>
        </div>
    );
}

export default ChildComponent;