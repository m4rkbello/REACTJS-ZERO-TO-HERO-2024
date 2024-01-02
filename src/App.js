import Dictionary from './pages/Dictionary';
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Definition from './pages/Definition';

function App() {

  return (

    <Router>
      <Header>
        <Routes>
          <Route path='/employees' exact element={<Employees />} />
          <Route path='/dictionary' exact element={<Dictionary />} />
          <Route path='/definition/:search' exact element={<Definition />} />
        </Routes>
      </Header>
    </Router>

  );

};

export default App;
