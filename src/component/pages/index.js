import React from 'react';
import { Container } from '../UI/container';
import {Grid } from '../UI/grid';
import Compliance from './compliance';
import Media from './media';
// import {Leaf} from '../UI/leaf/index';
import Performance from './performance';
const DashBoard = () => {
     
    return(

        <Container>
             <Grid container spacing='sm' aligItems='center'>
                <Grid item xs={12} sm={8} md={8} lg={8}>
                <Performance />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                   <Compliance/>
                   <Media/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DashBoard;