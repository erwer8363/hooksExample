/**
 * Created by ever on 2020/11/28.
 */
import React from 'react'
import HOCLazy from '../HOCLazy'
import slow from '../HOCLazy/slow'

const Comp1 = HOCLazy(() => slow(import('../components/Comp1'), 3000))

export default function () {
  return (
    <div>
      my name is page1, i am very lazy!!
      <Comp1 isComponent content="Comp1组件加载中..." suffix="!!!"/>
      <Comp1 isComponent content="Comp1组件加载中..." suffix="!!"/>
      <Comp1 isComponent content="Comp1组件加载中..." suffix="!"/>
    </div>
  )
}
