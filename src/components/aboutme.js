import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,
  },
  image: {
    width: 250,
    height: 250,
    

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://i.imgur.com/7x9WUMZ.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="title">
                  <h2>About Me</h2>
                </Typography>
                <Typography variant="body2" gutterBottom>
                <p>Directly out of high school I went into the Army. I loved being a system/network admin in the army. I have been at my current job since getting out and
 now seeking another challenge I am passionate about. </p>
<br></br>
 <p>I spend most of my time chasing these guys around, doing home projects, and working on coding projects. I enjoy learning the latest trends and seeing 
 how they work. After graduating in August I geared my focus on Javescript frameworks. I started with Angular and now enjoy using React. I also enjoy 
 fishing, bjj, and bike riding.</p>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  My toddlers face refuses to show any joy when it's bedtime. 
                </Typography>
               
              </Grid>
            
            </Grid>
          
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
