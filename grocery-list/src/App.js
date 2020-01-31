import React from 'react';
import logo from './logo.svg';
import './App.css';

import GroceryList from './Grocerylist';

function App() {
  return (
    <div className="App">
    <h1>Grocery items to buy:</h1>
    <GroceryList />
  </div>
    
  );
}

export default App;
