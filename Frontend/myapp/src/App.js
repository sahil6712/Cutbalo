import Home from './Screen/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Barberlogin from './Screen/Barberlogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup/Barber' element = {<Barberlogin></Barberlogin>}/>
      </Routes>
    </Router>
  );
}

export default App;
