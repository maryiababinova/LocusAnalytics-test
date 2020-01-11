import React, {useState} from 'react';
import './App.css';
import data from './data.json'
import {Link} from 'react-router-dom'

function App() {
  const [cats] = useState(data.cats)
  localStorage.setItem('cats', JSON.stringify(cats))

  return (


    <div className="App">
      <ul>
        <h1>Available cats:</h1>
      {cats.map(cat => <div key={cat.id}>
        <Link to={`/${cat.id}`} className="link">{cat.name}</Link>
        </div>)}
      </ul>
    </div>
  );
}

export default App;
