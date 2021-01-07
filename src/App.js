import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from 'styled-components' ; 

import Head from './components/Head' ;
import List from './components/List' ;
import Create from './components/Create' ;

const GlobalStyle = createGlobalStyle`
  body { display: flex ; background-color : #00b894 ; font-size:14px ; letter-spacing:-.5px ; box-sizing:border-box ; }
  #root { width:100% ; height:100vh ; }
  * { margin:0 ; padding:0 ; box-sizing:border-box ; }
` ;

// styled 컴포넌트를 만들때 이름은 항상 대문자로 시작
const WrapBlock = styled.div`
  display:flex ; 
  flex-direction:column ; 
  width:100% ; 
  height:100vh ; 
  padding:10px ;
` ;

function App() {

  const [ name, setName ] = useState('') ; 

  useEffect(_=>{
  })
  return (
    <WrapBlock>
      <GlobalStyle />
      <Head />
      <List />
      <Create />
    </WrapBlock>
  );
}

export default App;