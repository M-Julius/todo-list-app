import React from "react";
import { Route, Routes } from "react-router-dom";
import Todo from "../features/todos";
import UserList from "../features/users/UserList";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </>
  );
};

export default AppRouter;
