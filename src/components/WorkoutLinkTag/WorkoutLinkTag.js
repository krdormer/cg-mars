// CSS Stylings
import './WorkoutLinkTag.styles.css';
// withRouter HOC for access to browser history API
import { withRouter } from 'react-router-dom';

const WorkoutLinkTag = ({ id, history, ...otherDataProps }) => {
  return (
    <div className="workout-link-tag" key={id}>
      <h3 className="h3 h3__gotham">{otherDataProps.title}</h3>
      <img
        className="trainer-image"
        src={otherDataProps.thumbnail}
        alt={otherDataProps.title}
      />
      <div className="workout-intensity-info">
        <p className="p">Duration: {otherDataProps.duration} mins</p>
        <p className="workout-impact p">
          Impact: {otherDataProps.impactTag.toUpperCase()}
        </p>
        <p className="workout-level p">
          Level: {otherDataProps.levelTag.toUpperCase()}
        </p>
      </div>

      <p className="workout-description p">{otherDataProps.description}</p>

      <div className="workout-link-button-container">
        <button
          onClick={() => history.push(`/workouts/${otherDataProps.trainerId}`)}
          className="btn btn--primary btn--large tag-button"
        >
          Let's Go!
        </button>
      </div>
    </div>
  );
};

export default withRouter(WorkoutLinkTag);
