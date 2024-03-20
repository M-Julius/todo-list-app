import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Checkbox,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import TodoForm from "./TodoForm";
import DataNotFound from "../../components/DataNotFound";

const TodoList = ({ todos, markAsDone, deleteTodo, setEditTodo }) => {
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

  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{ marginTop: "20px" }}>
        Todo List
      </Typography>
      {todos?.length === 0 ? (
        <DataNotFound title="No todos found!" />
      ) : (
        <List>
          {todos?.map((todo) => (
            <ListItem key={todo.id}>
              <ListItemIcon>
                <Checkbox
                  checked={todo.done}
                  onChange={() => markAsDone(todo.id)}
                />
              </ListItemIcon>
              <ListItemText
                primary={todo.title}
                sx={{ textDecorationLine: todo.done ? "line-through" : "none" }}
                secondary={`Description: ${todo.description}, Category: ${todo.category}`}
              />
              <ListItemIcon>
                <IconButton onClick={() => openEditModal(todo)}>
                  <Edit />
                </IconButton>
              </ListItemIcon>
              <ListItemIcon>
                <IconButton onClick={() => deleteTodo(todo.id)}>
                  <Delete />
                </IconButton>
              </ListItemIcon>
            </ListItem>
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
