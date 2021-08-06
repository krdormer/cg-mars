import WorkoutLinkTag from '../../components/WorkoutLinkTag/WorkoutLinkTag';
import data from '../../data/workouts.json';

import './Dashboard.styles.css';

const Dashboard = () => {
  return (
    <main className="dashboard-page">
      <h1>WORKOUT WITH US!</h1>
      <div className="workout-link-container">
        {data.map(({ id, ...otherDataProps }) => {
          return <WorkoutLinkTag key={id} {...otherDataProps} />;
        })}
      </div>
    </main>
  );
};

export default Dashboard;
