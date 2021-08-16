import React from 'react';

const SvgIcon = ( WrappedComponent) => {
   return class SvgIcon extends React.Component {
      render() {
         let {style,onClick} = this.props;
         const _Style = {...style}
        return(
         <span className='icon' style={ _Style} onClick={ onClick}>
           <WrappedComponent {...this.props} />
         </span>
        );
      }
    }
}

export default SvgIcon;