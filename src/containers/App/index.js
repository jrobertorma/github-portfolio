import React, { useState, useEffect } from 'react';
import './App.css';

import Header from '../../components/Header';
import Profile from '../../components/Profile';
import Projects from '../Projects';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

function App() {
  const [userData, setUserData] = useState([{}]);

  useEffect(() => {
    fetch('https://api.github.com/users/jrobertorma', { 
      headers: {
        'Accept' : 'application/vnd.github.v3+json'
    }})
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => {
      setUserData(data);
    })
		.catch( error => console.error(error));
  }, []);

  return (
    <div className="App">
      <Header userName={userData.name}/>
      <Container>
        <Box py={3}>
          <Profile profileData={userData}/>
        </Box>
        <Box py={3}>
          <Projects projectsURL={userData.repos_url}/>
        </Box>
      </Container>
    </div>
  );
}

export default App;
