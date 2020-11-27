/**
 * Created by ever on 2020/7/13.
 * userImperativeHandler
 */
import React, {forwardRef, Fragment, useCallback, useImperativeHandle, useRef, useState} from 'react'

function FancyInput(props, ref) {
  const [fresh, setFresh] = useState(0)
  const attRef = useRef(0)
  useImperativeHandle(ref, () => {
    return {
      attRef,
      fresh,
    }
  }, [fresh])
  const handleClick = useCallback(() => {
    attRef.current = attRef.current + 1
  }, [])
  return (
    <div>
      {attRef.current}
      <button onClick={handleClick}>Fancy</button>
      <button onClick={() => setFresh(!fresh)}>刷新</button>
    </div>
  )
}

FancyInput = forwardRef(FancyInput)

const Index = (props) => {
  const fancyInputRef = useRef()
  return (
    <Fragment>
      <FancyInput ref={fancyInputRef}/>
      <hr/>
      <button onClick={() => console.log(fancyInputRef.current.attRef)}>
        父组件访问子组件的实例属性
      </button>
    </Fragment>
  )
}

export default Index
