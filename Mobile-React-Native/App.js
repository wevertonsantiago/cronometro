import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

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
    <View style={styles.container}>
      <Image source={require('./src/assets/crono.png')}></Image>
      <Text style={[styles.centerText,{color:'#ffff'}]}>{numero}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity onPress={iniciar}>
          <Text style={styles.btn}>{btnIniciar}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reiniciar}>
          <Text style={styles.btn}>REINICIAR</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.ultimo}>{ultimoN ? 'Último tempo: ' + ultimoN : ''}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#4565f5',
  
  },
  centerText:{
    marginTop:-155,
    fontSize:40,
  },
  btnArea:{
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    marginTop: 160,
    // backgroundColor:'#fff',
    width:350,
    height:50
  },
  btn:{
    fontSize:20,
    textAlignVertical:'center',
    textAlign:'center',
    fontWeight: "bold",
    color:'#fff',
    margin:10,
    borderWidth:4,
    height:60,
    width:160,
    borderRadius:25,
    borderColor:'#fff'

  },
  ultimo:{
    fontSize:20,
    color:'#fff',
    marginTop: 50,
  },
});