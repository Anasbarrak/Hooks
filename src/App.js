import './App.css';
import Movielist from './components/Movielist';
import data from './components/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NavScrollExample from './components/Navbar';
import Register from './components/Register';
import Acceuil from './components/Acceuil';
function App() {
  console.log(data)
  const getMovie = () => {
    var Newmovie = JSON.parse(localStorage.getItem('movie'))
    if (Newmovie !== null) {
     return data.push(Newmovie)
    } 
  }
  getMovie()
  return (
    <div className="App">
      <NavScrollExample/>
      <Routes>
        <Route path='register' element={<Register/>}/>
        <Route path='/home' element={<Movielist data={data}/>}/>
        <Route path='/login' element={<Acceuil/>}/>
      </Routes>
    </div>
  );
}
export default App;
