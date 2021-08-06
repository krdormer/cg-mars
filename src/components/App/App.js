import './App.css';
import Header from '../Header/Header';
import Dashboard from '../../pages/Dashboard/Dashboard';
import VideoWorkouts from '../../pages/VideoWorkouts/VideoWorkouts';

import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        {/* Will need to update path to accept dynamic URL */}
        <Route path="/workouts" component={VideoWorkouts} />
      </Switch>
    </div>
  );
};

export default App;
