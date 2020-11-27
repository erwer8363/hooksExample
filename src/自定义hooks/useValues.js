/**
 * Created by ever on 2020/8/29.
 */
import {useCallback, useState} from 'react'

export default (initValue) => {
  const [values, setValues] = useState(initValue)

  const updateValues = useCallback(_values => {
    if (typeof _values !== 'object') {
      return console.warn('values required type is object!')
    }
    setValues(Object.assign({}, values, _values))
  }, [values])

  const forceValues = useCallback(_values=>{
    setValues(Object.assign({},_values||initValue))
  },[])

  return [values, updateValues, forceValues]
}
