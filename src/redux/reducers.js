import { combineReducers } from "redux";
import shortid from "shortid";
import { initialState } from "./initial-state";

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const { title } = action.payload;
      return {
        todos: [
          ...state.todos,
          {
            id: shortid(),
            title,
            completed: false,
            important: false,
          },
        ],
      };
    }
    
    case "TOGGLE_COMPLETED": {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) todo.completed = !todo.completed;

        return todo;
      });

      return { todos: newTodos };
    }

    case "DELETE_TODO": {
      const newTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      return { todos: newTodos };
    }
    default:
      return state;
  }
}

export default reducer;
