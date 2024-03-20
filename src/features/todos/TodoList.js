import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  Typography,
} from "@mui/material";
import TodoForm from "./TodoForm";
import DataNotFound from "../../components/DataNotFound";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { setIndexTodo } from "./todosSlice";

const TodoList = ({ todos, markAsDone, deleteTodo, setEditTodo }) => {
  const dispatch = useDispatch();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    id: null,
    title: "",
    description: "",
    category: "",
  });

  const saveEditedTodo = (newTodo) => {
    setEditTodo(newTodo);
    setEditModalVisible(false);
  };

  const openEditModal = (todo) => {
    setEditedTodo(todo);
    setEditModalVisible(true);
  };

  const moveTodo = (dragIndex, hoverIndex) => {
    const dragTodo = todos[dragIndex];
    dispatch(setIndexTodo({ dragIndex, hoverIndex, dragTodo }));
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{ marginTop: "20px" }}>
        Todo List
      </Typography>
      {todos?.length === 0 ? (
        <DataNotFound title="No todos found!" />
      ) : (
        <List>
          {todos?.map((todo, index) => (
            <TodoItem
              index={index}
              key={todo.id}
              todo={todo}
              markAsDone={markAsDone}
              openEditModal={openEditModal}
              deleteTodo={deleteTodo}
              moveItem={moveTodo}
            />
          ))}
        </List>
      )}

      <Dialog
        open={editModalVisible}
        onClose={() => setEditModalVisible(false)}
      >
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TodoForm
            isEdit={true}
            defaultValue={editedTodo}
            addTodo={saveEditedTodo}
            onClose={() => setEditModalVisible(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TodoList;
