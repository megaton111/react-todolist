import styled from 'styled-components' ; 
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri' ;
import { MdCreate } from 'react-icons/md' ;

const TodoListBlock = styled.div`
` ; 

const TodoItem = styled.div`
  display: flex ; 
  align-items:center ; 
  background:#fff ; 
  border-radius:4px ; 
  min-height:30px ; 
  padding:10px 15px ; 
  font-size:14px ; 
  margin:10px 0 ;
` ; 

const CheckCircle = styled.div`
  display:flex ; 
  margin-right:10px ; 
  font-size:24px ; 
  height:24px ; 
` ;

const ModifyBlock = styled.div`` ; 

const Confirm = styled.div`
  display:flex ; 
  align-items: center ; 
  jusitify-content: center ; 
  font-size: 14px ; 
  cursor: pointer ;  
  color:#ced4da ; 
  &:hover {
    color:#ff6b6b ; 
  }
  display: none ; 
` ; 
const Cancel = styled.div`
  display:flex ; 
  align-items: center ; 
  jusitify-content: center ; 
  font-size: 14px ; 
  cursor: pointer ;  
  color:#ced4da ; 
  &:hover {
    color:#ff6b6b ; 
  }
  display: none ; 
` ; 
const Modify = styled.div`
  display:flex ; 
  align-items: center ; 
  jusitify-content: center ; 
  font-size: 14px ; 
  cursor: pointer ;  
  color:#ced4da ; 
  &:hover {
    color:#ff6b6b ; 
  }
` ; 

const List = _ => {
  return (
    <TodoListBlock>

      <TodoItem>
        <CheckCircle>
          <RiCheckboxBlankCircleLine />
          {/* <RiCheckboxCircleFill /> */}
        </CheckCircle>
        <div>강의 내용 노트 정리하기</div>

        {/* <ModifyBlock>
          <Modify><MdCreate /></Modify>
          <Confirm />
          <Cancel />
        </ModifyBlock> */}

      </TodoItem>

      <TodoItem>
        <CheckCircle>
          <RiCheckboxBlankCircleLine />
          {/* <RiCheckboxCircleFill /> */}
        </CheckCircle>
        <div>토요일 모임 장보기</div>
      </TodoItem>

    </TodoListBlock>
  )
}

export default List ; 