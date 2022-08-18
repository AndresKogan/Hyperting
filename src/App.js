
import { Box, Button, Grid } from '@mui/material';
import './App.css';
import Searchbar from './components/Searchbar';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FilterAlt from '@mui/icons-material/FilterAlt';
import Users from './components/Users';

function App() {
  return (
    <Box p={2} >
      <Grid container display="flex" justifyContent="space-between">
        <Grid item xs={12} lg={6} >
          <Searchbar />
        </Grid>
        <Grid item xs={12} lg={4} />
        <Grid item xs={6} lg={1}>
          <Button variant='outlined' startIcon={<FilterAlt />} sx={{ color: "#C1C1C1", borderColor: "#C1C1C1", borderRadius: "15px" }}>
            Filters
          </Button>
        </Grid>
        <Grid item xs={6} lg={1}>
          <Button variant='outlined' sx={{ color: "#C1C1C1", borderColor: "#C1C1C1", borderRadius: "15px" }}>
            <CalendarMonthIcon />
          </Button>
        </Grid>
      </Grid>
      <Users />
    </Box>
  );
}

export default App;
