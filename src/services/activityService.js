import { getActivitiesFromStorage, saveActivitiesToStorage } from '../repository/activityRepository';

class ActivityService {
  constructor() {
    this.activities = getActivitiesFromStorage();
  }

  getAllActivities() {
    return Promise.resolve(this.activities);
  }

  addActivity(activity) {
    this.activities.push(activity);
    saveActivitiesToStorage(this.activities);
  }

  updateActivity(updatedActivity) {
    this.activities = this.activities.map(act => act.id === updatedActivity.id ? updatedActivity : act);
    saveActivitiesToStorage(this.activities);
  }
}

export default new ActivityService();
