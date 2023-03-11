import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Episodes from './components/Episodes';
import Characters from './components/Characters';

function App() {
  return (
    <div className="text-center">
      <Routes>
        <Route exact path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/characters' element={<Characters></Characters>}></Route>
        <Route path='/episodes' element={<Episodes></Episodes>}></Route>
      </Routes>
    </div>
  );
}

export default App;
