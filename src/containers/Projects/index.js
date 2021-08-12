import React, { useEffect, useState } from 'react';
import ProjectCard from '../../components/ProjectCard';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const Projects = (props) => {
    const [githubRepos, setGithubRepos] = useState([{}]);

    useEffect(() => {
        fetch('https://api.github.com/users/jrobertorma/repos', { 
            headers: {
                'Accept' : 'application/vnd.github.v3+json'
            }})
            .then(response => response.json()) //Converting the response to a JSON object
            .then( data => { //console.log(data);
                setGithubRepos(data);
            })
            .catch( error => console.error(error));
    }, []);

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h4" component="h4" gutterBottom>
                Projects
            </Typography>

            <Grid container spacing={2} alignItems="center" justifyContent="space-around">
                { githubRepos.map( (repo)=>{
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                            <ProjectCard key={repo.id} projectData={repo}/>
                        </Grid>);
                })}
            </Grid>
        </Container>
    );
}
 
export default Projects;