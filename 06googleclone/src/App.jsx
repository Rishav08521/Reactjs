import React, { useState } from 'react';
import Toolbar from './component/Toolbar';
import FormulaBar from './component/FormulaBar';
import Grid from './component/Grid';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const App = () => {
    const [cells, setCells] = useState({}); // Stores cell data
    const [selectedCell, setSelectedCell] = useState(null); // Tracks the selected cell
  
    const updateCell = (key, value) => {
      setCells(prev => ({ ...prev, [key]: { ...prev[key], value } }));
    };

  return (
    <div className="app">
    <Toolbar />
    <FormulaBar selectedCell={selectedCell} updateCell={updateCell} />
    <Grid cells={cells} setCells={setCells} setSelectedCell={setSelectedCell} />
  </div>
  )
}
}

export default App
