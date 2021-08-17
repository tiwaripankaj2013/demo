import React from 'react';
import {H3} from '../UI/heading/index';
import { Leaf } from '../UI/leaf';
import './index.scss'; 
const TabHeadeing = (props) => {
  return(
    <div className="tabHeading">
      {/*  this card is used for all header creation part */}
      <Leaf>{props.icon}</Leaf>
      <div className="titleWrapper">
        {/*  value will pass any dynamic  heading or value */}
        <H3 className="text_black2">{props.title}</H3>
        <span className="subtittle">{props.subTitle}</span>
      </div>
    </div>
  );
};
export {TabHeadeing};