import styled from 'styled-components' ; 
import { MdAdd } from 'react-icons/md' ;

const CreateWrap = styled.div`
  display:flex ;
` ,
FormBlock = styled.form`
  display:flex ; 
  width:100% ; 
  height:40px ; 
` ,
Input = styled.input`
  display:inline-flex; 
  flex : 1 ; 
  border:0 ;
` ,
Button = styled.button`
  display:inline-flex; 
  align-items:center ; 
  justify-content: center ; 
  width:80px ; 
  border:0;
`
; 

const Create = _ => {
  return (
    <CreateWrap>
      <FormBlock>
        <Input />
        <Button>
          <MdAdd />
        </Button>
      </FormBlock>
    </CreateWrap>
  )
}

export default Create ; 