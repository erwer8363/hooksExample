/**
 * Created by ever on 2020/10/15.
 * 一个atom代表一个状态，Atom可在任意组件中进行读写，读取atom值的组件隐式订阅了该atom，因此任何atom的更新都将导致订阅该atom的组件重新渲染
 */
import React from 'react'
import {useRecoilState} from 'recoil'
import {textState} from './store'


export default function TextInput() {
  const [text, setText] = useRecoilState(textState)

  const handleChange = e => {
    setText(e.target.value)
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange}/>
      <br/>
      Echo: {text}
    </div>
  )
}
