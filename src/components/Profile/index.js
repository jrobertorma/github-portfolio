import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';

/**
 * ProfileLink gets an object, it the object has a keyValue value (lol) the component
 * renders the link, if it doesn't then the component doesn't render anything either
 * see the 'var && <stuffToRender>', that is equivalent to: if (//var exists) { //stuff to render }
 */
const ProfileLink = ({profileLinkData}) => {
    return (
        profileLinkData.keyValue &&
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
    /**
     * Parse profileData (the API reponse returned at src\containers\App\index.js)
     * into an array: 
     *  Object.keys returns the keys of an object as an array
     *  we go through those keys using a map() to create a new array based on every key
     *  the new array contains objects with the key name and key value of the original json response
     *  then we use .filter() to include in a final array the items that we need based in the
     *  filterProfileKeys() function.
     */
    const profileKeys = 
        Object.keys( profileData ).map( key => ({
            keyName: key,
            keyValue: profileData[key]
        })).filter(filterProfileKeys);

    /**
     * Create a new component based on the profileKeys array, for every item of the array we return a 
     * <ProfileLink /> component
     */
    const profileLinks = profileKeys.map( (linkData) => {
        return <ProfileLink key={linkData.keyName} profileLinkData={linkData}/>;
    });
    
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h4" gutterBottom>
                Profile
            </Typography>

            { profileLinks }
        </Container>
    );
}
 
export default Profile;