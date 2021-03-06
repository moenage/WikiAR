import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getInfoCards } from './actions/infoCards';
import InfoCards from './components/InfoCards/InfoCards';
import Form from './components/Form/Form';
// import ARicon from './images/ARicon.png';
import Styling from './styles';

const App = () => {
    const classing = Styling();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfoCards());
    }, [dispatch]);

    return (
        <Container maxWidth = "lg">
            <AppBar className={classing.AppBar} position="static" color="inherit">
                <Typography className={classing.heading} variant="h2" align="center">ARdventure</Typography>
                {/* <img className={classing.image} src={ARicon} alt="ARicon" height="30"/> */}
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