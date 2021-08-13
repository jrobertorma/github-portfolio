import React from 'react';

import Typography from '@material-ui/core/Typography';

const Header = ({userName}) => {
    return (
        <header className="App-header">
            <img src="GitHub-Mark-120px-plus.png"/>
            <Typography gutterBottom variant="h2" component="h2">
                My Github Portfolio 
            </Typography>
            <Typography variant="h6" component="p">
                {userName}
            </Typography>
        </header>
    );
}
 
export default Header;