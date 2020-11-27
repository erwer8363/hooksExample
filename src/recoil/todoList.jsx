/**
 * Created by ever on 2020/10/15.
 */
import React from 'react'
import {useRecoilValue} from 'recoil'
import {filteredTodoListState} from './store'
import TodoItemCreator from './totoItemCreator'
import TodoItem from './todoItem'
import TodoListFilters from './todoListFilters'
import TodoListStats from './todoListStats'

export default function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState)
  return (
    <>
      <TodoListStats/>
      <TodoListFilters/>
      <TodoItemCreator/>
      {
        todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem}/>
        ))
      }
    </>
  )
}
