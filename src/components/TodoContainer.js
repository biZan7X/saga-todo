import { makeStyles, Box, Grid, Typography, Divider, List } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const useStyles = makeStyles(() => ({
    root: {
        margin: 20,
        padding: 20,
        background: "rgb(92.9%, 92.9%, 92.9%)"
    }
}))

export default function TodoContainer() {

    const {todos} = useSelector((state) => {
        return {
            todos: state.todos,
        }
    })


    const classes = useStyles();
    return (
        <Box className={classes.root} >
            <Grid container spacing={2} >
                <Grid item xs={6} >
                    <Typography align="left" variant="h5" gutterBottom>
                        Todos
                    </Typography>
                    <Divider />
                    <List>
                        {todos.map((item) => {
                            if(!item.completed) return <TodoItem {...item} />;
                            else return null;
                        } )}
                    </List>
                </Grid>
                <Grid item xs={6} >
                    <Typography align="left" variant="h5" gutterBottom>
                        completed
                    </Typography>
                    <Divider />
                    <List>
                        {todos.map((item) => {
                            if(item.completed) return <TodoItem {...item} />;
                            else return null;
                        } )}
                    </List>
                </Grid>
            </Grid>
        </Box>
    )
}
