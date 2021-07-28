import React, { useState } from "react";

import { Box, TextField, Button } from "@material-ui/core";

import {ADD_TODO} from "../redux/actions"
import { useDispatch } from "react-redux";

export default function TodoAdder() {

    const [title,setTitle] = useState("");
    const dispatch = useDispatch();

    const handleTextChange = (e) => {
        setTitle(e.target.value)
    }

    const addTodo = () => {
        dispatch({type: ADD_TODO,payload: {title}});
        setTitle("");
    }
    
  return (
    <Box >
      <TextField
        style={{ width: 400,marginLeft: 10 }}
        label="Add new todo"
        variants="filled"
        onChange={handleTextChange}
        value={title}
      ></TextField>
      <Button style={{ height: 50 }} variant="contained" color="primary" onClick={addTodo} >
        Add
      </Button>
    </Box>
  );
}
