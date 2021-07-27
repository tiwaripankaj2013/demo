import React from 'react';
import {H3} from '../UI/heading/index';
import { Leaf } from '../UI/leaf';
import './index.scss'; 
const TabHeadeing = ({icon,tittle,subTitle}) => {
    return(
        <div className="tabHeading">
            <Leaf>{icon}</Leaf>
            <div className="titleWrapper">
            <H3 className="text_black2">{tittle}</H3>
            <span className="subtittle">{subTitle}</span>
            </div>
        </div>
    )
}
export {TabHeadeing};