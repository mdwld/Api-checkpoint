import './App.css';
import NavBar from './Components/NavBar';
import { Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import Error from './Pages/Error';
import Users from './Pages/Users';
import UserProfile from './Pages/UserProfile';
function App() {
  return (
    <div className="App">
      <NavBar /> 
      <h1>API WS</h1>
      
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/user/:id' element={<UserProfile/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
