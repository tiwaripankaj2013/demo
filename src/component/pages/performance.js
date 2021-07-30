import React, { useState } from 'react';
import { Tabs,TabPane} from '../UI/Tab';
import {AngleRightIcon } from '../UI/icon/Icon';
import { TabHeadeing } from './TabHeading';
import {Card} from '../UI/card/index';
import Placeholder from '../UI/placeholder';
const Performance = (props) => {
    const [currentKey, setCurrentKey] = useState(0);
    const onChange = (currentKey) => {
        setCurrentKey(currentKey);
    };
    return (
        <Card>
            {/*  value will pass any dynamic  heading or value */}
            <Tabs activeKey={currentKey} onChange={onChange}
                tabHeadingContent={<TabHeadeing icon={props.logo} title={props.header} subTitle={props.subHeader} />}>
                    {/*  we creating array map to create dynamic tabs */}
                {
                    props.tabContent.map((tab,index) =>(
                        <TabPane key={index} className={index===currentKey?'active':''} tabKey={index} tabHeader={tab.title} >
                            <Placeholder contentArea={tab.content} />
                        </TabPane>
                    ))
                }
            </Tabs>
            <div className="tabFooter text_right"><span className="more_btn" href={props.link}><span>{props.linkName} </span><AngleRightIcon /></span></div>
        </Card>
    )
}

export default Performance;