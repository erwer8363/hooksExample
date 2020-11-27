/**
 * Created by ever on 2020/8/26.
 */
import React, {Fragment, useReducer} from 'react'

const MyChildren = ({dispatch, State}) => {
  return (
    <div>
      <h1>传递过来的值是:{State.number}</h1>
      <button onClick={dispatch({name: 'add'})}>改变值</button>
    </div>
  )
}

export default () => {
  const [number, dispatchNumber] = useReducer((state, action) => {
    const {payload, name} = action
    switch (name) {
      case 'add':
        return state + 1
      case 'sub':
        return state - 1
      case 'reset':
        return payload
    }
    return state
  }, 0)
  return (
    <Fragment>
      当前值:{number}
      <button onClick={dispatchNumber({name: 'add'})}>增加</button>
      <button onClick={dispatchNumber({name: 'sub'})}>减少</button>
      <button onClick={dispatchNumber({name: 'reset', payload: 666})}>赋值</button>
      <MyChildren dispatch={dispatchNumber} State={{number}}/>
    </Fragment>
  )
}
