/**
 * Created by ever on 2020/9/6.
 */
import {useCallback, useState} from 'react'

export default function useStorage(key,defaultValue,keepOnWindowClosed=true) {
  const storage = keepOnWindowClosed? localStorage : sessionStorage
  const getStorageValue = ()=>{
    try{
      const storageValue = storage.getItem(key)
      if(storageValue !== null){
        return JSON.parse(storageValue)
      }else if(defaultValue) {
        const value = typeof defaultValue === 'function' ? defaultValue() : defaultValue
        storage.setItem(key,JSON.stringify(value))
        return value
      }
    }catch (e) {
      console.warn(`useStorage 无法获取${key}`,e)
    }
    return undefined
  }

  const [value, setValue] = useState(getStorageValue)
  const save = useCallback(value=>{
    setValue(prevState => {
      const finalValue = typeof value === 'function' ? value(prevState) : value
      storage.setItem(key, JSON.stringify(finalValue))
      return finalValue
    })
  },[])

  const clear = useCallback(()=>{
    storage.removeItem(key)
    setValue(undefined)
  },[])

    return [value,save,clear]
}
