import React from 'react';
import './card.scss';
export const Card = ({children,className}) => {
  return (<div className={`card ${className}`}>
    {children}
  </div>);
};
// export const CardHeader = () => {
//    return (<div className="card_header"> 
//    <span className="card_header_icon"><Leaf/> </span><p className="title">Today’s Tasks
//       <span className="subtitle">3 of 6 complete</span>
//    </p>
//    </div>)
// }
// export const CardBody = ({children}) => {
//    return (<div className="card_body">{children}</div>)
// }

export const CardLeaf = ({children,className}) => {
  return (<div className={`card card_leaf ${className}`}>
    {children}
  </div>);
};