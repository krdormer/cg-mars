import WorkoutLinkTag from '../../components/WorkoutLinkTag/WorkoutLinkTag';
import data from '../../data/workouts.json';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1>I'm a dashboard</h1>
      {data.map(({ id, ...otherDataProps }) => {
        return <WorkoutLinkTag id={id} {...otherDataProps} />;
      })}
    </div>
  );
};

export default Dashboard;
