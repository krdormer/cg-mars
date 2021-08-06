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
    <div className="workout-link-tag">
      <h2>Workout Tag</h2>
      <p>{id}</p>
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
