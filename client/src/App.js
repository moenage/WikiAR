import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

const App = () => {
    return (
        <div>
            <Container maxWidth = "lg">
                <AppBar position="static" color="inherit">
                    <Typography variant="h2" align="center">YOUR TITLE HERE</Typography>
                    <img src={arpic} alt="arpic" height="60" />
                </AppBar>
            </Container>
        </div>
    )
}

export default App;