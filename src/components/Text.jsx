import React from "react";
function Text(props){
    return(
        <p className={props.className}>{props.content}</p>
    )
}
export default Text;