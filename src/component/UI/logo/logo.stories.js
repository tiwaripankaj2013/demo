import React from 'react';
import {Logo} from './index';
export default {
   title: 'Brand',
  argTypes: {
    fontSize: { control: { type: 'inline-radio', options: ['48px', '24px', '16px'] } },
  },
 }

 export const Brand = (args) => {
   return (
     <div style={{ ...args }} >
        <Logo/>
     </div>
   )
 }