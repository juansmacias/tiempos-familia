import { useContext, useEffect } from 'react';
import { TimeContext } from '../context/TimeContext';

export const useActivities = () => {
  const { state, loadActivities, addActivity, updateActivity } = useContext(TimeContext);

  useEffect(() => {
    loadActivities();
  }, []);

  return {
    activities: state.activities,
    addActivity,
    updateActivity,
  };
};
