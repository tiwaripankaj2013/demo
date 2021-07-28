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
          
            <iframe className="media-iframe" width="100%" height="250" src="https://www.youtube.com/embed/RXMo35ch_Z8" title="YouTube video player" controls="0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <div className="media_footer">
                <span className="title">New Procedures for Compliance </span>
                <span className="subTitle">Prepared Foods Production</span></div>
        </div>
    )
}
export default Media;