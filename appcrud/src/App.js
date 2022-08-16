import './App.css';
import Header from './Components/Header';
import ListMovies from './Components/ListMovies';
import { Movie } from './Movies';
import {useState} from 'react';
function App(){
  const [films,setfilms]=useState(Movie);
  const [caracter,setcaracter]=useState("");
  const [rate,setRate]=useState(0);
  return (
    <div className="App">
    <Header  setcaracter={setcaracter} setRate={setRate}/>
    <ListMovies films={films} caracter={caracter} rate={rate}/>
    </div>
  );}

export default App;
