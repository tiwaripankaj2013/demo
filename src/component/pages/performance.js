import React, { useState } from 'react';
import { Tabs, TabPane } from '../UI/Tab';
import { PerformanceIcon,AngleRightIcon } from '../UI/icon/Icon';
import { TabHeadeing } from './TabHeading';
import {Card} from '../UI/card/index';
import  Placeholder  from '../UI/placeholder/index';
const Performance = () => {
    const [currentKey, setCurrentKey] = useState('0');
    const onChange = (currentKey) => {
        setCurrentKey(currentKey);
    };

    return (
        <Card>
            <Tabs activeKey={currentKey} onChange={onChange}
                tabHeadingContent={<TabHeadeing icon={<PerformanceIcon />} tittle='Performance' subTitle='May 15' />}>
                <TabPane tabKey="0" tabHeader="Yesterday" >
                    <Placeholder content =" content" />
                    <div className="tabFooter text_right"><span className="more_btn"><span>More </span><AngleRightIcon /></span></div>
                </TabPane>
                <TabPane tabKey="1" tabHeader="Last Week">
                <Placeholder content =" content of last week" />
                <div className="tabFooter text_right"><span className="more_btn"><span>More </span><AngleRightIcon /></span></div>
                </TabPane>
                
            </Tabs>
        </Card>
    )
}

export default Performance;