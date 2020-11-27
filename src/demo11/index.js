/**
 * Created by ever on 2020/7/13.
 */
import React, {forwardRef, useCallback, useRef} from 'react'

const FancyButton = forwardRef((props, ref) => (
  <div>
    <input type="text" ref={ref}/>
    <button className='fancyButton'>
      {props.children}
    </button>
  </div>
))

function App() {
  const ref = useRef()
  const handleClick = useCallback(() => {
    ref.current.focus()
  }, [])
  return (
    <div>
      <FancyButton ref={ref}>Click Me</FancyButton>
      <button onClick={handleClick}>获取焦点</button>
    </div>
  )
}

export default App
