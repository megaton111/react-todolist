import styled from 'styled-components' ; 

const HeadWrap = styled.header`
  display:flex ;
  align-items: center ; 
  width:100% ; 
  margin-bottom:10px ; 
  h1 { font-size:20px ; color:#fff ; }
  p{ display:flex ; font-size:12px ; font-weight:700 ; color:#2d3436 ; }
  p:nth-child(2){ margin-left:auto ; }
  p:last-child{margin-left:10px; }
` ; 

const Head = _ => {
  return (
    <HeadWrap>
      <h1>나의할일</h1>
      <p>2021년 1월 4일</p>
      <p>할일 : 999개</p>
    </HeadWrap>
  )
}

export default Head ; 