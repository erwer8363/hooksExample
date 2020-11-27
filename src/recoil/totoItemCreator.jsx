/**
 * Created by ever on 2020/10/15.
 */
import React, {Fragment, useState} from 'react'
import {useSetRecoilState} from 'recoil'
import {todoListState} from './store'
export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState('')
  const setTodoList = useSetRecoilState(todoListState)

  const addItem=()=>{
    setTodoList((oldTodoList)=>[...oldTodoList,{id:getId(),text:inputValue,isComplete:false}])
    setInputValue('')
  }

  const handleChange = ({target:{value}})=>{
    setInputValue(value)
  }

  return (
    <Fragment>
      <input type="text" value={inputValue} onChange={handleChange}/>
      <button onClick={addItem}>Add</button>
    </Fragment>
  )
}

let id = 0
function getId(){
  return id++
}
