import { useState } from 'react';
import './App.css';
import veri from './data.js';
import Card from './Card';



function App() {

const [kartlar, setKartlar] = useState(veri);

  return (
    <div className="App">

      <p id="header"> Our Tours</p>
      <div id="smallLine"></div>
      <div id="kartlar">
      {kartlar.map((item, index)=>{return <Card key={index} cardId={item.id} removeCard={setKartlar} cards={kartlar} name={item.name} info={item.info} price={item.price} image={item.image}   />})}
      </div>
    </div>
  );
}

export default App;
