import { useEffect, useState } from "react";

function App() {

  const [ name, setName ] = useState() ; 

  useEffect(_=>{
    fetch('http://localhost:3002/api')
      .then( res => res.json() )
      .then( data => setName( data.name ) );
    console.log( 'name :', name ) ;
    console.log( 'ininin' ) ; 
  })
  return (
    <div>{name}</div>
  );
}

export default App;
