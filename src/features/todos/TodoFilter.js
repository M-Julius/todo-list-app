import React from "react";
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";

const TodoFilter = ({
  filterCategory,
  setFilterCategory,
  showDone,
  setShowDone,
  searchKeyword,
  setSearchKeyword,
  categories,
  setResetFilter,
}) => {
  const handleFilterCategoryChange = (event) => {
    setFilterCategory(event.target.value);
  };

  const handleShowDoneChange = (event) => {
    setShowDone(event.target.checked);
  };

  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ marginTop: "20px" }}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom sx={{ marginTop: "20px" }}>
            Filter
          </Typography>
        </Grid>
        <Grid item>
          <Button onClick={setResetFilter} variant="inherit" color="primary">
            Reset Filter
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6} md={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="filter-label">Filter by Category</InputLabel>
            <Select
              labelId="filter-label"
              id="filter-select"
              value={filterCategory}
              onChange={handleFilterCategoryChange}
              label="Filter by Category"
            >
              <MenuItem value="all">All</MenuItem>
              {categories?.map((category, index) => (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Search"
            value={searchKeyword}
            onChange={handleSearchChange}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControlLabel
            control={
              <Checkbox checked={showDone} onChange={handleShowDoneChange} />
            }
            label="Show Marked as Done"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoFilter;
