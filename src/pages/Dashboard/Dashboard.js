// Component imports
import WorkoutLinkTag from '../../components/WorkoutLinkTag/WorkoutLinkTag';
// JSON workout / trainer data
import data from '../../data/workouts.json';
// CSS
import './Dashboard.styles.css';

const introGreeting = 'workout with us!';

const Dashboard = () => {
  return (
    <main className="dashboard-page">
      <h1 className="h1 h1__united dash-intro-greeting">
        {introGreeting.toUpperCase()}
      </h1>
      <section className="workout-link-container">
        {/* Maps over data obj array, returns one WorkoutLinkTag per element */}
        {data.map(({ id, ...otherDataProps }) => {
          return <WorkoutLinkTag key={id} {...otherDataProps} />;
        })}
      </section>
    </main>
  );
};

export default Dashboard;
