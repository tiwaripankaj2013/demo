import React from 'react';
import {ChartIcon,TaskIcon,GraphIcon,EmailIcon,HelpCircleIcon,ArrowUpIcon,ArrowDownIcon,MenuIcon, SearchIcon, MoreIcon} from './Icon';
import './icon.scss'
export default {
   title: 'Icons',
    argTypes: {
    fontSize: { control: { type: 'inline-radio', options: ['48px', '24px', '16px'] } },
    color: { control: 'color' },
  },
 }
 export const Icons = (args) => {
   return (
     <div  className="storyIcon" style={{ ...args }}>
        <ChartIcon />
        <TaskIcon/>
        <GraphIcon/>
        <EmailIcon/>
        <HelpCircleIcon/>
        <ArrowUpIcon/>
        <ArrowDownIcon/>
        <MenuIcon />
        <SearchIcon/>
        <MoreIcon/>
      </div>
  );
};
