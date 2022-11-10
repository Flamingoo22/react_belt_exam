import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import UpdatePage from './views/UpdatePage';
import CreatePage from './views/CreatePage';
import Main from './views/Main';
import User from './views/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path='/pirates' element={<Main />}/>
        <Route path='/pirate/new' element={<CreatePage />}/>
        <Route path='/pirate/:id' element={<UpdatePage />}/>
      </Routes>
    </div>
  );
}

export default App;