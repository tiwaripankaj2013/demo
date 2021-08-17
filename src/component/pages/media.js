import React from 'react';
import { H3 } from '../UI/heading';
import { PlayIcon } from '../UI/icon/Icon';
import './index.scss';
import Modal from '../UI/modal';
import useModal from '../UI/modal/useModal';
const Media = (props) => {
  const {isShowing, toggle} = useModal();
  
  return(
    <React.Fragment>
      <div className="media" style={{backgroundImage: `url(${props.image})`}}>
        {/*  value will pass any dynamic  heading or value */}
        <H3 className="text_white media_heading">{props.header}</H3>
        {/*  action will created when clicking the play button */}
        <div className="media_play"  ><PlayIcon onClick={toggle}/></div>
        <div className="media_footer">
          <span className="title">{props.footerHeader}</span>
          <span className="subTitle">{props.footerSubtitle}</span></div>
      </div>
      {/* creating modal for iframe for video playing */}
      <Modal isShowing={isShowing} hide={toggle} 
        content={<iframe src={`${props.videoLink}?autoplay=1`} 
          title={props.videoTitle} allow='autoplay' frameBorder="0" 
          allowFullScreen="allowfullscreen"></iframe>} />
    </React.Fragment>
  );
};
export default Media;   