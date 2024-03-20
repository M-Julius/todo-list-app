import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { getUsersAction } from "./userSlice";
import DataNotFound from "../../components/DataNotFound";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ marginTop: "20px" }}>
          Users
        </Typography>
        <List>
          {loading ? (
            <Box xs={12} sx={{ textAlign: "center", marginTop: "20px" }}>
              <CircularProgress />
            </Box>
          ) : users?.length === 0 ? (
            <DataNotFound />
          ) : error ? (
            <Box xs={12} sx={{ textAlign: "center", marginTop: "20px" }}>
              <Typography color="error">{error}</Typography>
            </Box>
          ) : (
            users?.map((user) => (
              <ListItem key={user.id}>
                <ListItemText primary={user.name} secondary={user.email} />
              </ListItem>
            ))
          )}
        </List>
      </Container>
    </div>
  );
};

export default UserList;
