import React from 'react'
import PersonalCard from '../PersonalCard'
import { Grid } from '@mui/material';

const FilteredUsers = ({ users, filter }) => {

    return (
        <div>
            <h1>Users</h1>
            <Grid container spacing={3} >
                {users.map((user) => {
                    return (<Grid key={`allusers_${user.name}`} item sm={12} lg={3}>
                        <PersonalCard key={`allusers_personalCard_${user.name}`} user={user} />
                    </Grid>
                    )
                })
                }
            </Grid >
        </div>)
}

export default FilteredUsers