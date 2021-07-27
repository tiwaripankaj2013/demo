import React from 'react';
import mediaImages from '../../assets/media.png';
import { H3 } from '../UI/heading';
import { PlayIcon } from '../UI/icon/Icon';
import './index.scss';
const Media = () => {
    return(
        <div className="media" style={{backgroundImage: 'url('+mediaImages+')'}}>
            <H3 className="text_white media_heading">Support</H3>
            <div className="media_play"><PlayIcon/></div>
            <div className="media_footer">
                <span className="title">New Procedures for Compliance </span>
                <span className="subTitle">Prepared Foods Production</span></div>
        </div>
    )
}
export default Media;