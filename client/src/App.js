import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import InfoCards from './components/InfoCards/InfoCards';
import Form from './components/Form/Form';
import ARdventure from './images/ARdventure.png';

const App = () => {
    return (
        <Container maxWidth = "lg">
            <AppBar  position="static" color="inherit">
                <img  src={ARdventure} alt="ARdventure" width = "fit" height="200" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <InfoCards />
                        </Grid>
                            <Form />

                        <Grid item xs={12} sm={4}>
                            
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;