/**
 * Created by ever on 2020/7/15.
 */
import React, {Fragment} from 'react'
import useCount from './customerHooks'

// function Index() {
//   const it = useRef()
//   const [count, setCount] = useState(60)
//
//   useEffect(() => {
//     if (count <= 0) {
//       clearInterval(it.current)
//     }
//   })
//
//   const startTimer = () => {
//     console.log('擦奥死的发')
//     it.current = setInterval(() => {
//       setCount(count => count - 1)
//     }, 1000)
//   }
//   return (
//     <Fragment>
//       <div>{count}</div>
//       <button onClick={startTimer}>点击开始</button>
//     </Fragment>
//   )
// }
function Index() {

  const [count, setDefaultCount] = useCount(0)
  const startTimer = () => {
    setDefaultCount(60)
  }
  return (
    <Fragment>
      <div>{count}</div>
      <button onClick={startTimer}>点击开始</button>
    </Fragment>
  )
}

export default Index
