import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';

const ProfileLink = ({profileLinkData}) => {
    return (
        <Typography variant="body1" color="textSecondary" align="justify">
            <strong>{profileLinkData.profileLinkTitle}: </strong> 
            <Link href={profileLinkData.profileLink} target="_blank" rel="noreferrer">
                {profileLinkData.profileLink}
            </Link>
        </Typography>
    );
}

const Profile = ({profileData}) => {
    //convertir en array, luego crear un array de objetos del tipo [{profileLinkTitle: 'val', profileLink:'val'}], 
    //luego recorrer nuevo array con map y pasárlo a ProfileLink ;)
    // const projects = profileData.map( (project) => {
    //     return project.name;
    // });
    const profileKeys = Object.keys(profileData);
    console.log(profileKeys); 

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h4" gutterBottom>
                Profile
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify">
                <strong>Pofile url: </strong> 
                <Link href={profileData.html_url} target="_blank" rel="noreferrer">
                    {profileData.html_url}
                </Link>
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify">
                <strong>Repositories url: </strong> 
                <Link href={profileData.repos_url} target="_blank" rel="noreferrer">
                    {profileData.repos_url}
                </Link>
            </Typography>
            <Typography variant="body1" color="textSecondary" align="justify">
                <strong>Company: </strong> 
                <Link href={profileData.company} target="_blank" rel="noreferrer">
                    {profileData.company}
                </Link>
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