import React from 'react';
import {render} from '@testing-library/react';
import Performance from './Performance';
import {PerformanceIcon} from '../UI/icon/Icon';

describe('Performance card pass heading and subtitle and 2 tab data in array list', () => {  
    const tabData =[
        {title:"Yesterday",
        content:"content",},
        {title:"Last Week",
        content:"last week content",}
    ]
    test('it shouldrender correctly  snapshots test ',() => {
        const PerformanceCard = render(<Performance 
            logo={<PerformanceIcon/>}
            tabContent={tabData} 
            header="Performance" 
            subHeader="May 15" 
            link="https://www.figma.com/"
            linkName="More" />)
        expect(PerformanceCard).toMatchSnapshot();
        });  
});