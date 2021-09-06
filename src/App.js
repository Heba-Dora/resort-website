import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Rooms from './components/Rooms'
import Contact from './components/Contact';
import Home from './components/Home'
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route path="/home" exact component= {Home}/>
          <Route path="/rooms" exact component= {Rooms}/>
          <Route path="/contact" exact component= {Contact}/>
          <Route path="*" exact component= {Error}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
