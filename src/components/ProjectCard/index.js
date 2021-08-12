import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 350,
    },
    media: {
        height: 150,
    },
});

const ProjectCard = ({projectData}) => {
    const classes = useStyles();

    return ( 
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image="GitHub_Logo.png"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {projectData.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {projectData.description}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary">
                Learn More
            </Button>
            </CardActions>
        </Card>
    );
}
 
export default ProjectCard;