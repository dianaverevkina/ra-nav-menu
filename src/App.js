import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import { DriftPage } from './components/DriftPage/DriftPage';
import { ForzaPage } from './components/ForzaPage/ForzaPage';
import { TimeAttackPage } from './components/TimeAttackPage/TimeAttackPage';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
