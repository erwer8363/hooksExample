/**
 * Created by ever on 2020/10/15.
 * selector代表了一个派生状态，派生状态是状态的转换，你可以将派生状态视为将状态传递给以某种方式修改给定状态的纯函数的输出
 */
import React, {Fragment} from 'react'
import {selector, useRecoilValue} from 'recoil'
import {textState} from './store'

const charCountState = selector({
  key: 'charCountState',
  get:({get})=>{
    const text = get(textState)
    return text.length
  }
})
export default function CharacterCount() {
  const count = useRecoilValue(charCountState)
  return (
    <Fragment>
      Character Count: {count}
    </Fragment>
  )
}
