import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';

const PersonalCard = ({ user }) => {

    // console.log(user)

    return (

        <Box sx={{ boxShadow: 3, borderRadius: "15px" }} p={3}>
            <Stack display="flex" direction="row" mb={2}>
                <Typography fontWeight="bold" color="text.primary">
                    User Id:
                </Typography>
                <Typography color="text.secondary">
                    {user.id}
                </Typography>
            </Stack>
            <Stack display="flex" direction="row" mb={2}>
                <Typography fontWeight="bold" color="text.primary">
                    User Name:
                </Typography>
                <Typography color="text.secondary">
                    {user.name}
                </Typography>
            </Stack>
            <Stack display="flex" direction="row" mb={2}>
                <Typography variant="body2" fontWeight="bold" color="text.primary">
                    User Email:
                </Typography>
                <Typography variant="body2">
                    {user.email}
                </Typography>
            </Stack>
            <Stack display="flex" direction="row" mb={2}>
                <Typography variant="body2" fontWeight="bold" color="text.primary">
                    User Gender:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {user.gender}
                </Typography>
            </Stack>
            <Stack display="flex" direction="row" mb={2}>
                <Typography variant="body2" fontWeight="bold" color="text.primary">
                    Status:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {user.status}
                </Typography>
            </Stack>

        </Box >
    )
}

export default PersonalCard