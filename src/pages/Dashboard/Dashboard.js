import WorkoutLinkTag from '../../components/WorkoutLinkTag/WorkoutLinkTag';
import data from '../../data/workouts.json';

import './Dashboard.styles.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>Workouts</h1>
      <main className="workout-link-container">
        {data.map(({ id, ...otherDataProps }) => {
          return <WorkoutLinkTag key={id} {...otherDataProps} />;
        })}
      </main>
    </div>
  );
};

export default Dashboard;
