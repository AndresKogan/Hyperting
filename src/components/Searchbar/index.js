import { useState } from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";





const Searchbar = () => {


  const [input, setInput] = useState("");

  return (
    <Box sx={{ width: "100%", position: "relative" }} pr={2}>
      <Paper
        component="form"
        sx={{
          p: "4px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          background: "white",
          borderRadius: "15px"
        }}
      > <SearchIcon />
        <InputBase
          sx={{ ml: 1, flex: 1, p: "2px" }}
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {input.length !== 0 && (
          <IconButton >
            <CloseIcon />
          </IconButton>
        )}

        <Button variant="contained" sx={{ backgroundColor: "#C1C1C1" }} startIcon={<KeyboardCommandKeyIcon />}>
          F
        </Button>
      </Paper>
    </Box>
  );
};

// Setting default values for the props
Searchbar.defaultProps = {
  // currentVenue: {},
  setFilters: () => { },
  columns: [],
  fetchAll: false,
  resultsLimit: 10,
  queryCharacterLimit: 3,
  placeholder: "",
  filterBy: "slug",
  onRowClick: null,
};

// Typechecking props
Searchbar.propTypes = {
  setFilters: PropTypes.func,
  fetchAll: PropTypes.bool,
  resultsLimit: PropTypes.number,
  queryCharacterLimit: PropTypes.number,
  columns: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
  //  searchBy: PropTypes.arrayOf(PropTypes.string) || PropTypes.string,
  filterBy: PropTypes.string,
  onRowClick: PropTypes.func,
};

export default Searchbar;
