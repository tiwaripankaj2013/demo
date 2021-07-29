import React from 'react';


const Placeholder = ({className, contentArea,}) => {
    return(
        <div className={`bg_yellow w_100 ${className}`} style={{minHeight:'50vh'}}>
            <p className="text_center text_white">{contentArea} </p>
        </div>
    )
}


export default Placeholder;