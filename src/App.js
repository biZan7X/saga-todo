import React from 'react'

import { Container, makeStyles } from '@material-ui/core'
import { Box, Paper, AppBar, Toolbar, Typography } from '@material-ui/core'

import TodoAdder from './components/TodoAdder'
import TodoContainer from './components/TodoContainer'

const useStyles = makeStyles((theme) => ({
    root: {},
    appContainer: {
        paddingLeft: 100,
        paddingRight: 100,
        marginTop: 100,
    },
    wrapper: {
        textAlign: "center",
        width: "100%",
    }
}))

export default function App() {

    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <AppBar position="static" >
                <Toolbar>
                    <Typography variant="h5" >SagaTodos</Typography>
                </Toolbar>
            </AppBar>

            <Container className={classes.appContainer} >
                <Paper className={classes.wrapper} elevation={0} >
                   <TodoAdder />
                   <TodoContainer />
                </Paper>
            </Container>
        </Box>
    )
}
