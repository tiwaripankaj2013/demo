import React, { useState } from 'react';
import { Tabs, TabPane } from '../UI/Tab';
import {AngleRightIcon } from '../UI/icon/Icon';
import { TabHeadeing } from './TabHeading';
import {Card} from '../UI/card/index';
import  Placeholder  from '../UI/placeholder/index';
const Performance = ({logo,header,subHeader,link}) => {
    const [currentKey, setCurrentKey] = useState('0');
    const onChange = (currentKey) => {
        setCurrentKey(currentKey);
    };

    return (
        <Card>
            <Tabs activeKey={currentKey} onChange={onChange}
                tabHeadingContent={<TabHeadeing icon={logo} tittle={header} subTitle={subHeader} />}>
                <TabPane tabKey="0" tabHeader="Yesterday" >
                    <Placeholder contentArea ="content" />
                    
                </TabPane>
                <TabPane tabKey="1" tabHeader="Last Week">
                <Placeholder contentArea =" content of last week" />
                {/* <div className="tabFooter text_right"><Link className="more_btn" to={link}><span>More </span><AngleRightIcon /></Link></div> */}
                </TabPane>
            </Tabs>
            <div className="tabFooter text_right"><span className="more_btn" href={link}><span>More </span><AngleRightIcon /></span></div>
        </Card>
    )
}

export default Performance;