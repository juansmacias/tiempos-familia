import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const TimeBlock = ({ time, activity }) => (
  <Grid item xs={6}>
    <Paper>
      <Typography variant="h6">{time}</Typography>
      {activity ? (
        <>
          <Typography variant="body1">{activity.description}</Typography>
          <Typography variant="body2">{activity.type}</Typography>
        </>
      ) : (
        <Typography variant="body2">No Activity</Typography>
      )}
    </Paper>
  </Grid>
);

export default TimeBlock;
