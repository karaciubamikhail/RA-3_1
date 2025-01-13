import React from 'react';
import { Stars } from './Stars';
import './App.css';

function App() {
  return (
    <div>
      <Stars count={5} />
      <Stars count={3} />
      <Stars count={1} />
      <Stars count={4} />
    </div>
  );
}

export default App;