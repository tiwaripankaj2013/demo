import React from 'react';
import { Container } from '../UI/container';
import { Grid } from '../UI/grid';
import { PerformanceIcon } from '../UI/icon/Icon';
import Placeholder from '../UI/placeholder';
import Compliance from './compliance';
import Media from './media';
import Performance from './Performance';
import mediaImages from '../../assets/video-img.png';
const DashBoard = () => {
  /*  creating dynamic tab array for the performace card */
  const tabData =[
    {title:'Yesterday',
      content:'content',},
    {title:'Last Week',
      content:'last week content',}
  ];
    
  return (
    <Container className="bg_gray2 py_6 m_0 container-sm">
      <Grid container spacing='sm' aligItems='center'>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          {/*  we passing dynamic value to performance card */}
          <Performance 
            logo={<PerformanceIcon/>}
            header="Performance"
            subHeader="May 15" 
            link="https://www.figma.com/"
            linkName="More"
            tabContent={tabData}
          />

        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4}>
          {/*  we passing dynamic value to compliance card */}
          <Compliance
            header="Overall Compliance" 
            subHeader="May 15-22" 
            contentArea={<Placeholder contentArea=" content of compliance" />} 
          />
          {/*  we passing dynamic value to media card */}
          <Media 
            header="Support" 
            footerHeader="New Procedures for Compliance" 
            footerSubtitle="Prepared Foods Production" 
            image={mediaImages} 
            videoLink="https://www.youtube.com/embed/0hGK7qiQ6WA" 
            videoTitle="placeholder video" />
        </Grid>
      </Grid>
    </Container>
  );
};
export default DashBoard;