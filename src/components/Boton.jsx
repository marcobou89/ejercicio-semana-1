import arr from '../utils/phrases.json'
import randomfrase from '../assets/utilities/randomfrase'
import React from 'react'
import imgArr from '../utils/imgArr.json'

const Boton = ({setFrase_st,setImage}) => {
    
  const handleShow =()=>{
  setFrase_st(randomfrase(arr)) 
  setImage(randomfrase(imgArr))
  
}

  return (
    <div className='contenedor_boton'>
       <button onClick={handleShow}> Probar mi suerte</button> 
    </div>
  )
}

export default Boton