import React from 'react';
import { Card, CardHeader, Typography, CardContent, CardMedia } from '@material-ui/core';

const ProfileCard = ({ user }) => {
    console.log(user)
    return (
        <Card raised={true}>
            <CardMedia component="img" alt="User avatar" image={user.avatar_url} height="240px" title="user avatar">

            </CardMedia>
            <CardContent>
                <Typography variant="overline">{`@${user.login}`}</Typography>
                <Typography variant="h3">{user.name}</Typography>
            </CardContent>
            <CardContent>

            </CardContent>
        </Card>
    )
}

export default ProfileCard