import React from 'react';
import { TimeProvider } from './context/TimeContext';
import { Container, Grid } from '@mui/material';
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';

function App() {
  return (
    <TimeProvider>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ActivityForm />
          </Grid>
          <Grid item xs={12}>
            <ActivityList />
          </Grid>
        </Grid>
      </Container>
    </TimeProvider>
  );
}

export default App;
