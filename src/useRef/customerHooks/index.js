/**
 * Created by ever on 2020/7/15.
 */
import {useEffect, useRef, useState} from 'react'

function useCount(initCount) {
  const [count, setCount] = useState(initCount)
  const [defaultCount, setDefault] = useState(0)
  const it = useRef()
  useEffect(() => {
    console.log('这里没有监听到吗。。。。', defaultCount)
    if (defaultCount > 0) {
      console.log('我曹。。神奇的bug', count)
      it.current = setInterval(() => {
        console.log('这里没有执行么。。。。')
        setCount(count => count - 1)
      }, 1000)
    }
  }, [defaultCount])
  useEffect(() => {
    if (count <= 0) {
      clearInterval(it.current)
    }
  })

  const setDefaultCount = (count) => {
    console.log('我擦，这里没有执行吗。。。。', count)
    setDefault(count)
    setCount(count)
  }

  return [count, setDefaultCount]
}

export default useCount
