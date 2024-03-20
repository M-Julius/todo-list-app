import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useDrag, useDrop } from "react-dnd";
import React from "react";

const TodoItem = ({
  index,
  todo,
  markAsDone,
  openEditModal,
  deleteTodo,
  moveItem,
}) => {
  const ref = React.useRef(null);
  const [, drop] = useDrop({
    accept: "TODO_ITEM",
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "TODO_ITEM",
    item: () => {
      return { id: todo.id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <ListItem ref={ref} sx={{ opacity: isDragging ? 0.5 : 1 }}>
      <ListItemIcon>
        <Checkbox checked={todo.done} onChange={() => markAsDone(todo.id)} />
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
  );
};

export default TodoItem;
