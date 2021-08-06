import './App.css';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
// import VideoWorkouts from './pages/VideoWorkouts/VideoWorkouts';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      {/* <VideoWorkouts /> */}
    </div>
  );
};

export default App;
