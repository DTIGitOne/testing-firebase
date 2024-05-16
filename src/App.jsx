import logo from './logo.svg';
import Add from './sites/Add';
import Main from './sites/Main';
import { Navigate, Route, Routes , BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="Main" />} />
          <Route path='/Main' element={<Main />} />
          <Route path='/Add' element={<Add />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
