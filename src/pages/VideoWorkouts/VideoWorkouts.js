import { withRouter } from 'react-router-dom';
import data from '../../data/workouts.json';

import './VideoWorkouts.styles.css';

const VideoWorkouts = ({ match }) => {
  const trainerId = match.params.workoutId;
  const workoutData = data[trainerId - 1];
  return (
    <div className="video-workout-page">
      <h2 className="workout-title">{workoutData.title}</h2>
      <video className="workout-video-feed" controls>
        <source src={workoutData.media} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default withRouter(VideoWorkouts);
