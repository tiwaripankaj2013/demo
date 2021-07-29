import React from 'react';
import { Container } from '../UI/container';
import { Grid } from '../UI/grid';
import Placeholder from '../UI/placeholder';
import Compliance from './compliance';
import Media from './media';
// import {Leaf} from '../UI/leaf/index';
import Performance from './performance';
const DashBoard = () => {

    return (
        <Container className="bg_gray2 py_6 m_0 container-sm">
            <Grid container spacing='sm' aligItems='center'>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                    <Performance />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                    <Compliance title="Overall Compliance" subtitle="May 15-22" content={<Placeholder content=" content of compliance" />} />
                    <Media />
                </Grid>
            </Grid>
        </Container>
    )
}

export default DashBoard;