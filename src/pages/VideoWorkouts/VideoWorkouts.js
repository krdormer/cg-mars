import { withRouter } from 'react-router-dom';
import data from '../../data/workouts.json';

import './VideoWorkouts.styles.css';

const VideoWorkouts = ({ match }) => {
  const trainerId = match.params.workoutId;
  const workoutData = data[trainerId - 1];
  return (
    <section className="video-workout-page">
      <h2 class="h2 h2__gotham workout-title">{workoutData.title}</h2>
      <video className="workout-video-feed" controls>
        <source src={workoutData.media} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="workout-video-info">
        <h3 class="h3 h3__gotham">WORKOUT INFO:</h3>
        <p className="p">Duration: {workoutData.duration} mins</p>
        <p className="p">Impact: {workoutData.impactTag.toUpperCase()}</p>
        <p className="p">Level: {workoutData.levelTag.toUpperCase()}</p>
        <p className="p">{workoutData.description}</p>
      </div>
    </section>
  );
};

export default withRouter(VideoWorkouts);
