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
  history
}) => {
  return (
    <div
      className="workout-link-tag"
      style={{ backgroundImage: `url(${thumbnail})` }}
      key={id}
      onClick={() => history.push('/workouts')}
    >
      <p>{description}</p>
      <p>{duration}</p>
      <p>{impactTag}</p>
      <p>{levelTag}</p>
      <p>{media}</p>
      <p>{thumbnail}</p>
      <p>{title}</p>
      <p>{trainerId}</p>
    </div>
  );
};

export default withRouter(WorkoutLinkTag);
