
const Frase = ({frase_st}) => {
   
    // console.log(randomfrase(arr));
    const{phrase,author}=frase_st
          
      
    return (
    
    <div className="contenedor_frase">
        <p>{phrase}</p>
        <span>Fuente: {author}</span>
    </div>
  )
}

export default Frase