
import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from './components/home/Home';
import FavList from "./components/favList/FavList"
import NavBar from "./components/navbar/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FavList" element={<FavList  />} />
      </Routes>
    </div>
  );
}

export default App;
