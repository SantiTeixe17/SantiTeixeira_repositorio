import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <Navbar colorTitle='white'/>
      <u><ItemListContainer greeting="Bienvenidos"/></u>
    </div>
  )
}

export default App;
