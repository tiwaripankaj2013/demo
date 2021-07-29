import React from 'react';


const Placeholder = ({className, content,}) => {
    return(
        <div className={`bg_yellow w_100 ${className}`} style={{minHeight:'50vh'}}>
            <p className="text_center text_white">{content} </p>
        </div>
    )
}


export default Placeholder;