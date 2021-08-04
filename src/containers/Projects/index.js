import React, { useEffect, useState } from 'react';

const Projects = (props) => {
    const [githubRepos, setGithubRepos] = useState([{}]);

    useEffect(() => {
        fetch('https://api.github.com/users/jrobertorma/repos', { 
            headers: {
                'Accept' : 'application/vnd.github.v3+json'
            }})
            .then(response => response.json()) //Converting the response to a JSON object
            .then( data => { console.log(data);
                setGithubRepos(data);
            })
            .catch( error => console.error(error));
    }, []);

    return (
        <div>
            <h4>Soy projects yoyoyooy</h4>
            <ul>
                { githubRepos.map( (repo)=>{
                    return <li key={repo.id}>{repo.name}</li>;
                })}
            </ul>
        </div>
    );
}
 
export default Projects;