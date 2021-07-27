import React, { Children, cloneElement } from 'react';
import './tab.scss';
export const TabContents = (props) => {
  return (
    <div>
      <div data-tab={props.dataTab} className={props.className}>
        {props.content}
      </div>
    </div>
  );
};

const TabPane = ({tabKey, tabHeader, activeKey, onChange }) => {
  return (
    <li className={`tabMenuItem ${tabKey === activeKey ? 'active' : ''}`} onClick={() => onChange && onChange(tabKey)}>
     <span className="label">{tabHeader}</span>
    </li>
  );
};

const Tabs = ({ children, activeKey, onChange , tabHeadingContent}) => {
  return (
    <div className="tab">
      <div className="tabHeader">
          {tabHeadingContent}
       
        <ul className="tabMenu">
          {Children.map(children, (child) => {
            return cloneElement(child, { activeKey, onChange });
          })}
        </ul>
        
      </div>
      <>
        {Children.map(children, (child) => {
          if (child.props.tabKey === activeKey) {
            return child.props.children;
          }
        })}
      </>
    </div>
  );
};

export { Tabs, TabPane };