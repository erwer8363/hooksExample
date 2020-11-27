/**
 * Created by ever on 2020/9/6.
 */
import {useCallback, useState} from 'react'

export default function useChange(initial) {
  const [value, setValue] = useState(()=>{
    const value = typeof initial === 'function' ? initial() : initial
    return value
  })
  const onChange = useCallback((e)=>setValue(e.target.value),[])
  return { value, setValue, onChange, bindEvent:{onChange,value},bind:{onChange:setValue,value}}
}
