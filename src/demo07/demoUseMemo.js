/**
 * Created by ever on 2020/8/26.
 */
import React, {Fragment, useMemo} from 'react'

export default ()=> {
  const newLog = useMemo(()=>{
    const log = ()=>{
      console.log(6666)
    }
    return log
  },[])
    return (
      <div onClick={()=>newLog()}/>
    )
}
