/**
 * Created by ever on 2020/8/29.
 */
import React, {Fragment, useCallback} from 'react'
import styles from './styles.module.css'

const includeTarget = (target, content)=>{
  return target.contains(content)
}

export default function Wrap({children, onClick, className=''}) {
  const handleClick = useCallback((e)=>{
    const childNodes = e.currentTarget.childNodes

    for (let i=0;i<childNodes.length;i++){
      if(!includeTarget(childNodes[i],e.target)){
        onClick && onClick()
      }
    }
  },[])
    return (
      <div onClick={handleClick} className={`${styles.modal} ${className}`}>
        {children}
      </div>
    )
}
