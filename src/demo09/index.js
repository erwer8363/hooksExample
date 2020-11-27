/**
 * Created by ever on 2020/1/15.
 */
import React, {Fragment, useCallback, useEffect, useState} from 'react'

function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  })

  const onResize = useCallback(() => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    })
  })

  useEffect(() => {
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return size
}

function Index() {
  const size = useWinSize()
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('是不是count变化，我就执行一次。。。。')
    return () => {
      console.log('这里是取消事件函数。。。')
    }
  }, [])
  return (
    <Fragment>
      页面size是:{size.width}x{size.height}
      <p>你点击了{count}次鼠标</p>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </Fragment>
  )
}

export default Index
