/**
 * Created by ever on 2020/8/29.
 */
import React, {useCallback, useState} from 'react'
import ReactDOM from 'react-dom'
import Wrap from './Wrap'
export default function useProtal(options={}) {
  const {
    closeOnOutSide=true,
    className='',
    rootContainer=document.body,
    defaultShow=false
  } = options

  const [isShow, setShow]=useState(defaultShow)

  const Protal = useCallback(({children})=>{
    if(!isShow)return null
    return ReactDOM.createPortal(
      <Wrap onClick={closeOnOutSide? handleClose:()=>{}} className={className}>
        {children}
      </Wrap>, rootContainer
    )
  },[isShow, className, rootContainer, closeOnOutSide])

  const handleShow = useCallback(()=>{
    setShow(true)
  },[])
  const handleClose=useCallback(()=>{
    setShow(false)
  },[])
    return {
      Protal,
      isShow,
      handleShow,
      handleClose
    }
}
