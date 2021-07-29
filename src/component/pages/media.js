import React from 'react';
import mediaImages from '../../assets/media.png';
import { H3 } from '../UI/heading';
import { PlayIcon } from '../UI/icon/Icon';
import './index.scss';
import Modal from '../UI/modal';
import useModal from '../UI/modal/useModal';
const Media = () => {
    const {isShowing, toggle} = useModal();
    return(
        <>
        <div className="media" style={{backgroundImage: 'url('+mediaImages+')'}}>
            <H3 className="text_white media_heading">Support</H3>
            <div className="media_play"  ><PlayIcon onClick={toggle}/></div>
            <div className="media_footer">
                <span className="title">New Procedures for Compliance </span>
                <span className="subTitle">Prepared Foods Production</span></div>
        </div>
        <Modal isShowing={isShowing} hide={toggle} content={<iframe width="960" height="480" src="https://www.youtube.com/embed/9xwazD5SyVg?autoplay=1" title="placeholder video" allow='autoplay' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>} />
        </>
    )
}
export default Media;   