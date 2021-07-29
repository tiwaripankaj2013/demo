import React from 'react';
import { H3 } from '../UI/heading';
import { PlayIcon } from '../UI/icon/Icon';
import './index.scss';
import Modal from '../UI/modal';
import useModal from '../UI/modal/useModal';
const Media = ({header,footerHeader,footerSubtitle,image,videoLink,videoTitle}) => {
    const {isShowing, toggle} = useModal();
    return(
        <>
        <div className="media" style={{backgroundImage: `url(${image})`}}>
            <H3 className="text_white media_heading">{header}</H3>
            <div className="media_play"  ><PlayIcon onClick={toggle}/></div>
            <div className="media_footer">
                <span className="title">{footerHeader}</span>
                <span className="subTitle">{footerSubtitle}</span></div>
        </div>
        <Modal isShowing={isShowing} hide={toggle} content={<iframe width="960" height="480" src={`${videoLink}?autoplay=1`} title={videoTitle} allow='autoplay' frameborder="0"  allowfullscreen="allowfullscreen"></iframe>} />
        </>
    )
}
export default Media;   