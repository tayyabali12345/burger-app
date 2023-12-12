import {Route, Routes} from 'react-router-dom';
import './App.css';
import Burger from './Component/Burger'
import Error from './Component/Error'
import SignUp from './Component/SignUp'
import Button from './Component/buttons/button';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Burger/>} />
        <Route path='/signup' Component={SignUp} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
