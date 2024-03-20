import React, { useState } from "react";
import { Button, TextField, DialogActions } from "@mui/material";

const TodoForm = ({ onClose, addTodo, isEdit, defaultValue }) => {
  const [title, setTitle] = useState(defaultValue?.title ?? "");
  const [description, setDescription] = useState(defaultValue?.description ?? "");
  const [category, setCategory] = useState(defaultValue?.category ?? "");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: isEdit ? defaultValue.id : Math.random(),
      title,
      description,
      category,
      done: isEdit ? defaultValue.done : false,
    });
    setTitle("");
    setDescription("");
    setCategory("");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
        required
        multiline
        rows={4}
      />
      <TextField
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <DialogActions>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginRight: "8px" }}
        >
          Save
        </Button>
        <Button color="error" variant="contained" onClick={onClose}>
          Cancel
        </Button>
      </DialogActions>
    </form>
  );
};

export default TodoForm;
