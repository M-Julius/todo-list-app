import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    list: [],
    filter: {
      keyword: "",
      category: "all",
      isDone: null,
    },
    listFiltered: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list = [...state.list, action.payload]
      state.listFiltered = state.list;
    },
    deleteTodo: (state, action) => {
       state.list = state.list.filter((todo) => todo.id !== action.payload);
       state.listFiltered = state.list;
       return state;
    },
    editTodo: (state, action) => {
      const index = state.list.findIndex(
        (todo) => todo.id === action.payload.id
      );
      const indexFiltered = state.listFiltered.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
        state.listFiltered[indexFiltered] = action.payload;
      }
      return state;
    },
    setFilter: (state, action) => {
      const {
        keyword = state.filter.keyword,
        category = state.filter.category,
        isDone = state.filter.isDone,
      } = action.payload;

      if (keyword !== undefined && keyword !== null) {
        state.filter.keyword = keyword;
      }
      if (category) {
        state.filter.category = category;
      }
      if (typeof isDone === "boolean" || isDone === null) {
        state.filter.isDone = isDone;
      }

      state.listFiltered = state.list.filter((todo) => {
        const keywordMatch = state.filter.keyword
          ? todo.title
              .toLowerCase()
              .includes(state.filter.keyword?.toLowerCase())
          : todo.title.toLowerCase().includes(keyword?.toLowerCase());

        const categoryMatch =
          category === "" ||
          category === "all" ||

          todo.category === category

        const isDoneMatch = isDone === null || todo.done === isDone;


        return keywordMatch && categoryMatch && isDoneMatch;
      });

    },
    resetFilter: (state) => {
      state.filter = {
        keyword: "",
        category: "",
        isDone: false,
      };
      state.listFiltered = state.list;

      return state;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, resetFilter, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
