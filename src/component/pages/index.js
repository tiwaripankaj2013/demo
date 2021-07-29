import React from 'react';
import { Container } from '../UI/container';
import { Grid } from '../UI/grid';
import { PerformanceIcon } from '../UI/icon/Icon';
import Placeholder from '../UI/placeholder';
import Compliance from './compliance';
import Media from './media';
import Performance from './performance';
import mediaImages from '../../assets/media.png';
const DashBoard = () => {

    return (
        <Container className="bg_gray2 py_6 m_0 container-sm">
            <Grid container spacing='sm' aligItems='center'>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Performance logo={<PerformanceIcon/>} header="Performance" subHeader="May 15" link="https://www.figma.com/" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Compliance
                         header="Overall Compliance" 
                         subHeader="May 15-22" 
                         contentArea={<Placeholder contentArea=" content of compliance" />} 
                         />
                         {/* haeader pass title of card , subheader as passing subtitle  */}
                    <Media 
                        header="Support" 
                        footerHeader="New Procedures for Compliance" 
                        footerSubtitle="Prepared Foods Production" 
                        image={mediaImages} 
                        videoLink="https://www.youtube.com/embed/9xwazD5SyVg" 
                        videoTitle="placeholder video" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default DashBoard;