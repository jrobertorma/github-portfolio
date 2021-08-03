import React from 'react';

const Profile = ({profileData}) => {
    return (
        <div>
            <h4>Soy profile yoyoyoyo</h4>
            <p>html_url:    {profileData.html_url}</p>
            <p>repos_url:   {profileData.repos_url}</p>
            <p>name:        {profileData.name}</p>
            <p>company:     {profileData.company}</p>
            <p>location:    {profileData.location}</p>
            <p>email:       {profileData.email}</p>
            <p>bio:         {profileData.bio}</p>
        </div>
    );
}
 
export default Profile;