import React, { useState } from 'react'
import arr from '../src/utils/phrases.json'
import randomfrase from '../src/assets/utilities/randomfrase'
import imgArr from '../src/utils/imgArr.json'
import './App.css'
import Boton from './components/Boton'
import Frase from './components/Frase'

function App() {
  const fraseInicial = randomfrase(arr);
  const [frase_st, setFrase_st] = useState(fraseInicial);

  const fotos = randomfrase(imgArr);
  const [image,setImage]= useState(fotos)

  const appstyle={  
    backgroundImage: `url(../fortuna-2/fondo${image}.png)`
    
  }
  
  return (
    <div className='contenedor_app' style={appstyle}>
      <h1>Galleta de la Fortuna</h1>
      <Boton
      setFrase_st={setFrase_st}
      setImage={setImage}/>
      <Frase
      frase_st={frase_st}/>
      

    </div>
  )
}

export default App
