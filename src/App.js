import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Header>
    <Router>
    <Routes>
    <Route path='/employees' exact element={<Employees />} />

    </Routes>
    </Router>
 
    </Header>
  );
  
};

export default App;
