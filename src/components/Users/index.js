import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Chat from '../Chat'
import FilteredUsers from '../FilteredUsers'
import { createTheme } from '@mui/material/styles';
import fetchUsers from '../../actions/fetchUsers';


const useStyle = makeStyles({

    button: {
        margin: "2px"
    },
});


const Users = () => {
    const classes = useStyle();
    const [users, setUsers] = useState()
    const [filterSelector, setFilterSelector] = useState("all")

    useEffect(() => {
        fetchUsers().then(allUsers =>
            setUsers(allUsers)
        );
    }, [])

    const theme = createTheme({
        palette: {
            primary: {
                light: '##C1C1C1',
                main: '#C1C1C1',
                dark: '##C1C1C1',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',
            },
        },
    });



    return (
        !users ?
            <p>Loading...</p>
            :
            <div>
                <Typography variant="h2">Users</Typography>



                <Button
                    className={classes.button}
                    variant="contained"
                    sx={{ backgroundColor: "#C1C1C1" }}
                    onClick={() => {
                        setFilterSelector("all");
                    }}
                >
                    All
                </Button>

                <Button
                    className={classes.button}
                    variant="contained"
                    sx={{ backgroundColor: "#C1C1C1" }}
                    onClick={() => {
                        setFilterSelector("active");
                    }}
                >
                    Active
                </Button>

                <Button
                    className={classes.button}
                    variant="contained"
                    sx={{ backgroundColor: "#C1C1C1" }}
                    onClick={() => {
                        setFilterSelector("offline");
                    }}
                >
                    Offline
                </Button>

                <Button
                    className={classes.button}
                    variant="contained"
                    sx={{ backgroundColor: "#C1C1C1" }}
                    onClick={() => {
                        setFilterSelector("archived");
                    }}
                >
                    Archived
                </Button>


                <Chat users={users} filter="active" />
                <FilteredUsers users={users} filter={filterSelector} />
            </div>
    )
}

export default Users