import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import Menu from './components/Menu';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          {/* <Switch> */}
            <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/drift" element={<DriftPage/>}></Route>
              <Route path="/timeattack" element={<TimeAttackPage/>}></Route>
              <Route path="/forza" element={<ForzaPage/>}></Route>
            </Routes>
          {/* </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
