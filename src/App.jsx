import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from "./pages/Welcome.jsx";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome}/>  
        </Switch>
      </Router>
    </div>
  );
}

export default App;
