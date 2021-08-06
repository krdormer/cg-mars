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
    <div
      className="workout-link-tag"
      key={id}
      onClick={() => history.push('/workouts')}
      style={{ backgroundImage: `url(${thumbnail})` }}
    >
      <div className="workout-intensity-info">
        <span className="workout-impact">
          Impact: {impactTag.toUpperCase()}
        </span>
        <span className="workout-level">Level: {levelTag.toUpperCase()}</span>
      </div>
      {/* <p>{media}</p>
      <p>{title}</p>
      <p>{trainerId}</p>
      <p>{description}</p> */}
      <div className="workout-timing-info">
        <span className="workout-duration">Duration: {duration} mins</span>
      </div>
    </div>
  );
};

export default withRouter(WorkoutLinkTag);
