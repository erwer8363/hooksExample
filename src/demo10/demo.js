/**
 * Created by ever on 2020/8/26.
 */
import React, {Fragment, useContext} from 'react'

const myContext = React.createContext()

const DemoContext = ()=>{
  const value = useContext()
  return(
    <div>my name is {value.name}</div>
  )
}

export default ()=> {
    return (
      <myContext.Provider value={{name:'aline', age:18}}>
        <DemoContext/>
      </myContext.Provider>
    )
}
