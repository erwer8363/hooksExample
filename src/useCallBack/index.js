/**
 * Created by ever on 2020/8/29.
 */
import React, {Fragment, useCallback, useEffect, useRef, useState} from 'react'
import Button from './Button'
import useChange from '../useHooks/useChange'

export default function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [txt, setText] = useState('')

  const userName = useChange('')

  const txtRef1 = useRef()
  const txtRef2 = useRef()
  const txtRef3 = useRef()

  const form = useRef()

  const refList = [txtRef1, txtRef2, txtRef3]

  const inputRef = useRef()

  useEffect(() => {
    txtRef1.current.focus()
  }, [])

  const handleClickButton1 = () => {
    setCount1(count1 + 1)
    // console.log('我这里获取到的值是。。。', userName)
  }

  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1)

  }, [count2])

  const handleShow = () => {
    setText(userName.value)
  }

  const handleChange = () => {
    const value = inputRef.current.value
    console.log(value)
  }

  const handleInput = (e) => {
    console.log(e.target.value, refList.findIndex(cur => cur.current === e.target))
    if (e.target.value.length === 1) {
      const curIndex = refList.findIndex(cur => cur.current === e.target)
      if (curIndex + 1 < refList.length) {
        refList[curIndex + 1].current.focus()
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('这里触发 了提交时间吗。。。', form.current.elements['username'].value)
  }
  const handleReset = (e) => {
    e.preventDefault()
    form.current.reset()
    console.log('这里的清空方法不好使使啊。。。')
  }
  return (
    <Fragment>
      <div>
        <Button onClickButton={handleClickButton1}>Button1</Button>
      </div>
      <div>
        <Button onClickButton={handleClickButton2}>Button2</Button>
      </div>
      <input type='password' {...userName.bindEvent}/>
      <p>
        这里的input值是。。。:{txt}
      </p>
      <button onClick={handleShow}>显示密码</button>
      <input ref={inputRef} type="text" onChange={handleChange}/>

      <form onSubmit={handleSubmit} onReset={handleReset} ref={form}>
        <label htmlFor="txt1">输入1</label>
        <input name={'username'} id={'txt1'} ref={txtRef1} type="text" onKeyUp={handleInput} required/>
        <input ref={txtRef2} type="text" onKeyUp={handleInput}/>
        <input ref={txtRef3} type="text" onKeyUp={handleInput}/>
        <button type='submit'>提交</button>
        <button type='reset'>清空</button>
      </form>

    </Fragment>
  )
}
