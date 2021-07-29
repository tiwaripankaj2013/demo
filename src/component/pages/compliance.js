import React from 'react';
import { CardLeaf } from '../UI/card';
import {H3} from '../UI/heading';

const Compliance = ({header,subHeader,contentArea}) => {
    return(
        <CardLeaf>
            <div className="leafHeading">
                <H3 className="text_black2">{header}</H3>
                <span className="subtittle">{subHeader}</span>
            </div>
            {contentArea}
        </CardLeaf>
    )
}
export default Compliance;