/**
 * Created by ever on 2020/11/28.
 */
import React, {useEffect, useRef, useState} from 'react'
import Loading from './loading'
import './index.css'
const PH = ({isCompent=false, content=''})=>{
  const [show, setShow] = useState(false)
  const timeOutRef = useRef()

  useEffect(()=>{
    timeOutRef.current = setTimeout(()=>{
      setShow(true)
    }, 500)
    return ()=>{
      clearTimeout(timeOutRef.current)
    }
  },[])

  return (
    <>
      {
        show && (
          <div className={`ph ${!isCompent ? "page" : ""}`}>
            <div className='loading-wrapper'>
              <Loading/>
              <div>{content}</div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default function HOCLazy(chunk) {
  const WrapperComponent = React.lazy(chunk)
  const Comp = ({isComponent=false,content='',...props})=>{
    return (
      <React.Suspense fallback={<PH isCompent={isComponent} content={content}/>}>
        <WrapperComponent {...props}/>
      </React.Suspense>
    )
  }
  return Comp
}
