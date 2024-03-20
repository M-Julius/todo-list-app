import { combineReducers } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todosSlice';
import userReducer from '../features/users/userSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
  users: userReducer,
});

export default rootReducer;
