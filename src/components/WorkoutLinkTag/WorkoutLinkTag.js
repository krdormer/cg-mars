import './WorkoutLinkTag.styles.css';

import { withRouter } from 'react-router-dom';

const WorkoutLinkTag = ({
  id,
  description,
  duration,
  impactTag,
  levelTag,
  media,
  thumbnail,
  title,
  trainerId,
  history,
}) => {
  return (
    <div className="workout-link-tag" key={id}>
      <div className="workout-metrics">
        <div className="workout-intensity-info">
          <span className="workout-impact">
            Impact: {impactTag.toUpperCase()}
          </span>
          <span className="workout-level">Level: {levelTag.toUpperCase()}</span>
        </div>
        <div className="trainer-image">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="workout-timing-info">
          <spam className="workout-title">{title}</spam>
          <span className="workout-duration">Duration: {duration} mins</span>
        </div>
      </div>
      <div className="specific-workout-text">
        <p>{description}</p>
        <button
          onClick={() => history.push(`/workouts/${trainerId}`)}
          class="btn btn--primary"
        >
          Let's Go!
        </button>
      </div>

      {/* <p>{media}</p>
      
       */}
    </div>
  );
};

export default withRouter(WorkoutLinkTag);
