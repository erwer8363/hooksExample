/**
 * Created by ever on 2020/7/9.
 * useContext使用
 */
import React, {useContext, useState} from 'react'

const myContext = React.createContext()

const Com1 = (props) => {
  const {count, setCount} = useContext(myContext)
  return (
    <div>
      <h1>{props.txt}</h1>
      {count}<br/>
      <button onClick={() => setCount(count + 1)}>count+1</button>
    </div>
  )
}


const Index = (props) => {
  const [count, setCount] = useState(0)
  return (
    <myContext.Provider value={{count, setCount}}>
      <Com1 txt={'这里显示信息'}/>
    </myContext.Provider>
  )
}

export default Index
