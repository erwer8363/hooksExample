/**
 * Created by ever on 2020/8/26.
 */
import React, {Fragment, useCallback, useEffect, useState} from 'react'

const DemoChildren = React.memo((props)=>{
  console.log('子组件更新')
  useEffect(()=>{
    props.getInfo('子组件')
  },[])
  return <div>子组件</div>
})

export default function DemoUseCallback({id}) {
  const [number, setNumber] = useState(1)

  const getInfo = useCallback((sonName)=>{
    console.log(sonName)
  },[id])
    return (
      <Fragment>
      <button onClick={()=> setNumber(number+1)}>增加</button>
        <DemoChildren getInfo={getInfo}/>
      </Fragment>
    )
}
