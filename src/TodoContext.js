import React, { createContext, useContext, useReducer, useRef } from 'react' ; 

/*
  #관리할 데이터
  - state 
  - dispatch 
*/

const todoData = [
  {
    id : 1 ,
    text : '모임 식당 예약' ,
    done : false 
  } ,
  {
    id : 2 ,
    text : '3차 강의 자료 만들기' ,
    done : false 
  }
]  ;

const Reducer = () => {} ;
const state = createContext() ;
const Dispatch = createContext() ;
const NextId = createContext() ;

const Provider = ({ children }) => {}

export {}