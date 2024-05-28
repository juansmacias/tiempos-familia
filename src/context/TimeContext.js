import React, { createContext, useReducer } from 'react';
import activityService from '../services/activityService';

const initialState = {
  activities: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVITIES':
      return { ...state, activities: action.payload };
    case 'ADD_ACTIVITY':
      return { ...state, activities: [...state.activities, action.payload] };
    case 'UPDATE_ACTIVITY':
      return {
        ...state,
        activities: state.activities.map(act => act.id === action.payload.id ? action.payload : act)
      };
    default:
      return state;
  }
};

export const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadActivities = async () => {
    const activities = await activityService.getAllActivities();
    dispatch({ type: 'SET_ACTIVITIES', payload: activities });
  };

  const addActivity = (activity) => {
    activityService.addActivity(activity);
    dispatch({ type: 'ADD_ACTIVITY', payload: activity });
  };

  const updateActivity = (activity) => {
    activityService.updateActivity(activity);
    dispatch({ type: 'UPDATE_ACTIVITY', payload: activity });
  };

  return (
    <TimeContext.Provider value={{ state, loadActivities, addActivity, updateActivity }}>
      {children}
    </TimeContext.Provider>
  );
};
