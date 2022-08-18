import React from 'react'
import PersonalCard from '../PersonalCard'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Button, Grid, Typography } from '@mui/material';

const Chat = ({ users, filter }) => {

    const filteredUsers = users.filter(user => {
        return user.status = filter
    })

    return (
        <div>
            <Typography variant="h4">
                Online Users
            </Typography>
            <Grid container spacing={3} sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                overflowX: "auto",
                whiteSpace: "nowrap",
                padding: "24px 0px 24px 0px",

            }}>
                <Grid item sm={12} lg={3} sx={{
                    display: "inline-block",
                    position: "relative",
                    margin: "0px 8px",
                    cursor: "pointer",
                }} alignSelf="center">
                    <Box sx={{ boxShadow: 3, borderRadius: "15px", height: "5rem" }} p={3} textAlign="center">
                        <Button>
                            <AddCircleOutlineIcon fontSize='large' />
                        </Button>
                        <Typography>
                            New Chat
                        </Typography>
                    </Box>
                </Grid>
                {filteredUsers.map((user) => {
                    return (<Grid key={user.name} item sm={12} lg={3} sx={{
                        display: "inline-block",
                        position: "relative",
                        margin: "0px 8px",
                        cursor: "pointer",
                    }}>
                        <PersonalCard key={`personalCard_${user.name}`} user={user} />
                    </Grid>
                    )
                })
                }
            </Grid >
        </div>)
}

export default Chat