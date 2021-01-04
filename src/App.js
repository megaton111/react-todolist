import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from 'styled-components' ; 

import Head from './components/Head' ;
import List from './components/List' ;

const GlobalStyle = createGlobalStyle`
  body { display: flex ; background-color : #00b894 ; font-size:14px ; letter-spacing:-.5px ; padding:10px ; }
  #root { width:100% ; }
  * { margin:0 ; padding:0 ; }
` ;

// styled 컴포넌트를 만들때 이름은 항상 대문자로 시작
const WrapBlock = styled.div`
  width:100% ; 
  height:100% ; 
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
    </WrapBlock>
  );
}

export default App;