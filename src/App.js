import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Router>
      <Header>
        <Routes>
          <Route path='/employees' exact element={<Employees />} />
          <Route path='/employees' exact element={<Employees />} />
          <Route path='/employees' exact element={<Employees />} />
          <Route path='/employees' exact element={<Employees />} />
        </Routes>
      </Header>
    </Router>

  );

};

export default App;
