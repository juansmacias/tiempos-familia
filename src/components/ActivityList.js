import React from 'react';
import { useActivities } from '../hooks/useActivities';
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';

const ActivityList = () => {
  const { activities, updateActivity } = useActivities();

  const handleToggle = (activity) => {
    updateActivity({ ...activity, completed: !activity.completed });
  };

  return (
    <List>
      {activities.map(activity => (
        <ListItem key={activity.id} button onClick={() => handleToggle(activity)}>
          <Checkbox checked={activity.completed} />
          <ListItemText primary={activity.description} secondary={activity.type} />
        </ListItem>
      ))}
    </List>
  );
};

export default ActivityList;
