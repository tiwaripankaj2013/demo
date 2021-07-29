import React from 'react';
import { CardLeaf } from '../UI/card';
import {H3} from '../UI/heading';

const Compliance = ({title,subtitle,content}) => {
    return(
        <CardLeaf>
            <div className="leafHeading">
                <H3 className="text_black2">{title}</H3>
                <span className="subtittle">{subtitle}</span>
            </div>
            {content}
        </CardLeaf>
    )
}
export default Compliance;