import React from 'react';
import { CardLeaf } from '../UI/card';
import {H3} from '../UI/heading';

const Compliance = () => {
    return(
        <CardLeaf>
            <div className="leafHeading">
                <H3 className="text_black2">Overall Compliance</H3>
                <span className="subtittle">May 15-22</span>
            </div>
            <div className="bg_yellow w_100" style={{minHeight:'50vh'}}>
                <p className="text_center text_white">performance </p>
            </div>
        </CardLeaf>
    )
}
export default Compliance;