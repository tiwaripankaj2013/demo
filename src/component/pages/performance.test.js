import React from 'react';
import {render,screen} from '@testing-library/react';
import Performance from './Performance';
import {PerformanceIcon} from '../UI/icon/Icon';

describe('Performance card', () => {  
    const tabData =[
        {title:"Yesterday",
        content:"content",},
        {title:"Last Week",
        content:"last week content",}
    ]
    test('it shouldrender correctly  snapshots test',() => {
        const PerformanceCard = render(<Performance 
            logo={<PerformanceIcon/>}
            tabContent={tabData} 
            header="Performance" 
            subHeader="May 15" 
            link="https://www.figma.com/"
            linkName="More" />)
        expect(PerformanceCard).toMatchSnapshot();
        });  
        test('performance card component',() => {
            const {queryByTestId,queryByText} = render(<Performance 
                logo={<PerformanceIcon/>}
                tabContent={tabData} 
                header="Performance" 
                subHeader="May 15" 
                link="https://www.figma.com/"
                linkName="More" />);
            const performacneComponent = queryByTestId('performanceCard');
            expect(performacneComponent).toBeFalsy();
            const cardHeading = screen.queryByText('Performance').innerHTML;
            expect(cardHeading).toBe('Performance');
        });
        test('card Heading',() => {
             render(<Performance 
                logo={<PerformanceIcon/>}
                tabContent={tabData} 
                header="Performance" 
                subHeader="May 15" 
                link="https://www.figma.com/"
                linkName="More" />);
            const cardHeading = screen.queryByText('Performance').innerHTML;
                expect(cardHeading).toBe('Performance');
                const cardSubHeading = screen.queryByText('May 15').innerHTML;
                expect(cardSubHeading).toMatch('May 15');
        });
});