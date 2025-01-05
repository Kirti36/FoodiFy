
import './App.css';
import Mainpage from './Component/Mainpage';
import Mealinfo from './Component/Mealinfo';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Mainpage/>}/>
        <Route path='/:mealid' element={<Mealinfo/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
