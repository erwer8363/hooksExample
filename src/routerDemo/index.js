/**
 * Created by ever on 2020/7/17.
 */
import React, {Fragment, useEffect, useReducer} from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'start':
      return {...state, count: 0}
    case 'run':
      return {...state, count: state.count + 1}
    case 'stop':
      return {...state, count: 0}
    default:
      return {...state}
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count: 0})
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({type: 'run'})
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const handleStart = () => {
    dispatch({type: 'start'})
  }
  const handleStop = () => {
    dispatch({type: 'stop'})
  }

  return (
    <Fragment>
      {state.count}
      <button onClick={handleStart}>开始</button>
      <button onClick={handleStop}>停止</button>
    </Fragment>
  )
}

export default App
