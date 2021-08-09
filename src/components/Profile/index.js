import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';

const ProfileLink = ({profileLinkData}) => {
    return (
        <Typography variant="body1" color="textSecondary" align="justify">
            <strong>{profileLinkData.keyName}: </strong> 
            <Link href={profileLinkData.keyValue} target="_blank" rel="noreferrer">
                {profileLinkData.keyValue}
            </Link>
        </Typography>
    );
}

const filterProfileKeys = (key) => {
    if( key.keyName === 'html_url' || 
        key.keyName === 'repos_url' ||
        key.keyName === 'company' ||
        key.keyName === 'location' ||
        key.keyName === 'email' ||
        key.keyName === 'bio' ){
        return ( { profileLinkTitle:key.keyName, profileLink:key.keyValue } );
    }
}

const Profile = ({profileData}) => {
    //convertir en array, luego crear un array de objetos del tipo [{profileLinkTitle: 'val', profileLink:'val'}],
    //flitrar profileKeys para crear array con las keys que se quieren mostrar (how?, usando filter duh XD)
    const profileKeys = 
    Object.keys( profileData ).map( key => ({
        keyName: key,
        keyValue: profileData[key]
    })).filter(filterProfileKeys);

    //luego recorrer nuevo array con map y pasárlo a ProfileLink ;)
    const projects = profileKeys.map( (project) => {
        return <ProfileLink key={project.keyName} profileLinkData={project}/>;
    });
    
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h4" gutterBottom>
                Profile
            </Typography>

            { projects }
        </Container>
    );
}
 
export default Profile;