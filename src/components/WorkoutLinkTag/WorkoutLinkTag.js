import './WorkoutLinkTag.styles.css';

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
}) => {
  return (
    <div
      className="workout-link-tag"
      style={{ backgroundImage: `url(${thumbnail})` }}
      key={id}
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

export default WorkoutLinkTag;
