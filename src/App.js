// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Bacis } from "./Componentes/Navbar";
import { Heade } from "./Componentes/header";
import { Collect } from "./Componentes/Collection";
import { Par } from "./Componentes/Patrie";
import { Hove } from "./Componentes/Hover";
import { Marg } from "./Componentes/Marge";
import { Foote } from "./Componentes/Footer";

function App() {
  return (
    <div className='App'>
      <Bacis />
      <Heade />
      <Collect />
      <Par />
      <Hove />
      <Marg />
      <Foote />
    </div>
  );
}

export default App;
