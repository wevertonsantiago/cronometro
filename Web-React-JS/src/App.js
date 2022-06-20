import React, { useState } from 'react';
import Crono from './assets/crono.png'
import './App.css'

let time = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
  
  const [btnIniciar, setBtnIniciar] = useState('INICIAR')
  const [numero,setNumero] = useState('00:00:00')
  const [ultimoN,setUltimoN] = useState(null)
  

  function iniciar(){
    setBtnIniciar('PAUSAR')
    if(time !== null){
      clearInterval(time);
      time = null;
    }else {
      time = setInterval(() => {
        ss++;
        if(ss == 60){
          ss = 0;
          mm++;
        }
        if( mm == 60){
          mm = 0;
          hh++;
        }else{

        }
        let format =
        (hh < 10 ? '0' + hh : hh ) + ':'
        + (mm < 10 ? '0' + mm : mm) + ':'
        + (ss < 10 ? '0' + ss : ss);

        setNumero(format)

      }, 100)
    }
  }

  function reiniciar(){
    setBtnIniciar('INICIAR')
    setNumero('00:00:00')
    setUltimoN(numero) 
     ss = 0;
     mm = 0;
     hh = 0;

  }

  return (
    <div className="container">
      <img src={Crono}></img>
      <span className="centerText">{numero}</span>
      <div className="btnArea">
        <button className="btn" onClick={iniciar}>
          <span >{btnIniciar}</span>
        </button>
        <button className="btn" onClick={reiniciar}>
          <span >REINICIAR</span>
        </button>
      </div>
      <span className="ultimo">{ultimoN ? 'Último tempo: ' + ultimoN : ''}</span>
    </div>
  );
}