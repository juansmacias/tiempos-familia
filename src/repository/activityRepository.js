const STORAGE_KEY = 'activities';

export const getActivitiesFromStorage = () => {
  const activities = localStorage.getItem(STORAGE_KEY);
  return activities ? JSON.parse(activities) : [];
};

export const saveActivitiesToStorage = (activities) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(activities));
};
