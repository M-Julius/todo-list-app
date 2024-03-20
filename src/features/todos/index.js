import React, { useMemo, useState } from "react";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Box,
} from "@mui/material";
import { addTodo, deleteTodo, editTodo, resetFilter, setFilter } from './todosSlice';
import { Add as AddIcon } from "@mui/icons-material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const [openDialog, setOpenDialog] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [filter, setTodoFilter] = useState({
    keyword: '',
    category: '',
    isDone: false,
  })

  const isFilterEnabled = useMemo(() => {
    if (todos.filter.keyword !== '' || todos.filter.category !== '' || todos.filter.isDone) {
      return true;
    }
    return false;
  }, [todos.filter])

  const categories = useMemo(() => {
    const categories = todos?.list?.map((todo) => todo?.category) ?? [];
    return [...new Set(categories)];
  }, [todos.list])

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = async() => {
    setOpenDialog(false);
  };

  const addTodoList = (todo) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(addTodo(todo));
      setLoading(false);
    }, 1500);
  };

  const deleteTodoList = (id) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(deleteTodo(id));
      setLoading(false);
    }, 1500);
  };

  const editTodoList = (todo) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(editTodo(todo));
      setLoading(false);
    }, 1500);
  };

  const markAsDone = (id) => {

    let todo = {}
    const updatedTodos = todos.list.find((item) => item.id === id);
    todo = {...updatedTodos, done: !updatedTodos.done};

    dispatch(editTodo(todo));
  };

  const setKeyword = (keyword) => {
    dispatch(setFilter({ keyword: keyword }));
    setTodoFilter({ ...filter, keyword: keyword });
  }

  const setCategory = (category) => {
    dispatch(setFilter({ category: category }));
    setTodoFilter({ ...filter, category: category });
  }

  const setShowDone = () => {
    dispatch(setFilter({ isDone: !todos.filter.isDone }));
    setTodoFilter({ ...filter, isDone: !todos.filter.isDone });
  }

  const setResetFilter = () => {
    dispatch(resetFilter());
    setTodoFilter({ keyword: '', category: '', isDone: false });
  }

  
  return (
    <div>
      <Container>
        <TodoFilter
          categories={categories}
          filterCategory={filter.category ?? ''}
          showDone={filter?.isDone ?? false}
          searchKeyword={filter?.keyword ?? ''}
          setFilterCategory={setCategory}
          setSearchKeyword={setKeyword}
          setShowDone={setShowDone}
          setResetFilter={setResetFilter}
        />

        <TodoList
          todos={isFilterEnabled ? todos.listFiltered : todos.list}
          markAsDone={markAsDone}
          deleteTodo={deleteTodoList}
          setEditTodo={editTodoList}
        />
        {isLoading && (
          <Box xs={12} sx={{ textAlign: "center", marginTop: "20px" }}>
            <CircularProgress />
          </Box>
        )}
      </Container>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={handleOpenDialog}
      >
        <AddIcon />
      </Fab>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add New Todo</DialogTitle>
        <DialogContent>
          <TodoForm addTodo={addTodoList} onClose={handleCloseDialog} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Todo;
