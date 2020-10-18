import React from "react";

const Message = (props) => {
    return (
       <p>
          {props.message}
          <br/>
          <small className="text-muted">Message</small>
       </p>
    )
};


export default Message