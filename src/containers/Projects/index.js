import React, { useEffect, useState } from 'react';

const Projects = ({projectsURL}) => {
    const [githubRepos, setGithubRepos] = useState([{}]);
    
    //la llamada no funciona, revisa cómo pasar una variable a fetch T.T
    useEffect(() => {
        fetch(projectsURL, { 
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
            {/* {githubRepos.map( (repo)=>{
                <p>{repo.name}</p>
            })} */}
        </div>
    );
}
 
export default Projects;