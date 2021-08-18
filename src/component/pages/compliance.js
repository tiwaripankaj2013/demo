import React from 'react';
import PropTypes from 'prop-types';
import { CardLeaf } from '../UI/card';
import {H3} from '../UI/heading';

const Compliance = (props) => {
  return(
    <CardLeaf>
      <div className="leafHeading">
        {/*  value will pass any dynamic  heading or value */}
        <H3 className="text_black2">{props.header}</H3>
        <span className="subtittle">{props.subHeader}</span>
      </div>
      {props.contentArea}
    </CardLeaf>
  );
};
Compliance.propTypes={
  header:PropTypes.string,
  subHeader:PropTypes.string,
}; 
export default Compliance;