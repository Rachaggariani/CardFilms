import React from 'react'
import CardMovies from './CardMovies';
function ListMovies({films,caracter,rate}) {
  return (
    <div className='container' style={{display:"flex",width:"1000px",flexWrap:"wrap",justifyContent:"space-around"}}>
      {films.filter((el)=>el.title.toLowerCase().includes(caracter.toLowerCase())&&el.rate>=rate).map((el)=>(<CardMovies key={el.id} Movie={el}/>))}
    </div>
  )
}

export default ListMovies
