/**
 * Created by ever on 2020/1/13.
 */
import React, {forwardRef, Fragment, useCallback, useImperativeHandle, useReducer, useRef, useState} from 'react'

const myReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {count: state.count + 1}
    case 'sub':
      return {count: state.count - 1}
    default:
      throw new Error()
  }
}

function Kun(props, ref){
  const kun = useRef()

  const introduce = useCallback(()=>{
    console.log('i can sing, jump, rap, play basketball')
  },[])

  useImperativeHandle(ref,()=>({
    introduce:()=>{
      introduce()
    }
  }))

  return (
    <div ref={kun}>{props.count}</div>
  )
}

const KunKun = forwardRef(Kun)

function Demo05() {
  const [state, dispatch] = useReducer(myReducer, {count: 0})

  const [count, setCount] = useState(0)
  const kunRef = useRef()

  const onClick = useCallback(()=>{
    setCount(count=>count+1)
    kunRef.current.introduce()
  },[])

  return (
    < Fragment>
      <h2>现在的分数是{state.count}</h2>
      <button onClick={() => dispatch({type: 'add'})}>加一分</button>
      <button onClick={() => dispatch({type: 'sub'})}>减一分</button>
      <div>
        点击次数：{count}
        <KunKun ref={kunRef} count={count}/>
        <button onClick={onClick}>点我</button>
      </div>
    </Fragment>)
}

export default Demo05
