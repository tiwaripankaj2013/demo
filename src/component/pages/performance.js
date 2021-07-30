import React, { useState } from 'react';
import { Tabs,TabPane} from '../UI/Tab';
import {AngleRightIcon } from '../UI/icon/Icon';
import { TabHeadeing } from './TabHeading';
import {Card} from '../UI/card/index';
import Placeholder from '../UI/placeholder';
const Performance = (props) => {
    const [currentKey, setCurrentKey] = useState('0');
    const onChange = (currentKey) => {
        setCurrentKey(currentKey);
    };
    return (
        <Card>
            <Tabs activeKey={currentKey} onChange={onChange}
                tabHeadingContent={<TabHeadeing icon={props.logo} title={props.header} subTitle={props.subHeader} />}>
                {
                    props.tabContent.map((tab,index) =>(
                        <TabPane tabKey={index} tabHeader={tab.title} >
                            <Placeholder contentArea={tab.content} />
                        </TabPane>
                    ))
                }
            </Tabs>
            <div className="tabFooter text_right"><span className="more_btn" href={props.link}><span>More </span><AngleRightIcon /></span></div>
        </Card>
    )
}

export default Performance;