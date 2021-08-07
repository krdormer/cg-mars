// CSS Stylings
import './WorkoutLinkTag.styles.css';
// withRouter HOC for access to browser history API
import { withRouter } from 'react-router-dom';

const WorkoutLinkTag = ({ id, history, ...otherDataProps }) => {
  return (
    <div className="workout-link-tag" key={id}>
      <h2 className="h2 h2__gotham">{otherDataProps.title}</h2>
      <div className="trainer-image">
        <img src={otherDataProps.thumbnail} alt={otherDataProps.title} />
      </div>

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

      <button
        onClick={() => history.push(`/workouts/${otherDataProps.trainerId}`)}
        className="btn btn--primary btn--large tag-button"
      >
        Let's Go!
      </button>
    </div>
  );
};

export default withRouter(WorkoutLinkTag);
