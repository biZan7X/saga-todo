import {
  FormControlLabel,
  FormGroup,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  Typography,
} from "@material-ui/core";
import { CheckBox } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

import { TOGGLE_COMPLETED,DELETE_TODO } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function TodoItem({ id, title, completed, important }) {
  const dispatch = useDispatch();

  const toggleCheckBox = () => {
    dispatch({ type: TOGGLE_COMPLETED, payload: { id } });
  };

  const handleDeleteTodo = () => {
      dispatch({type:DELETE_TODO,payload:{id}})
  }

  return (
    <ListItem dense>
      <FormGroup>
        <FormControlLabel
          control={
            <CheckBox
              checked={completed}
              name={title}
              color="primary"
              onClick={toggleCheckBox}
            />
          }
          label={
            <Typography
              style={{
                textDecoration: completed && "line-through",
              }}
            >
              {title}
            </Typography>
          }
        ></FormControlLabel>
      </FormGroup>

      <ListItemSecondaryAction>
        <IconButton onClick={handleDeleteTodo} edge="end" >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>

    </ListItem>
  );
}
