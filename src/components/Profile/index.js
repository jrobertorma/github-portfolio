import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const Profile = ({profileData}) => {
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h4" gutterBottom>
                Profile
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify">
                html_url: {profileData.html_url}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify">
                repos_url: {profileData.repos_url}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify">
                name: {profileData.name}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify">
                company: {profileData.company}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify">
                location: {profileData.location}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify">
                email: {profileData.email}
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify">
                bio: {profileData.bio}
            </Typography>
        </Container>
    );
}
 
export default Profile;