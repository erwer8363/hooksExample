/**
 * Created by ever on 2020/10/1.
 *
 * useImperativeHandle(ref,createHandle,[deps])可以自定义暴露给父组件的实例值，如何不使用，父组件的ref不会访问到任何值
 * useImperativeHandle应该与forwardRef搭配使用
 * React.forwardRef会创建一个react组件，这个组件能够将其接受的ref属性转发到其组件树下的另一个组件中
 * React.forward接收渲染函数作为参数，React将使用prop和ref作为参数来调用此函数
 */
import React, {forwardRef, useEffect, useImperativeHandle, useRef} from 'react'

const Child = forwardRef((props, ref)=>{
  useImperativeHandle(ref,()=>({
    say:sayHello
  }))
  const sayHello = ()=>{
    alert('Hello, 我是子组件')
  }
})

export default function Demo() {
  const domRef = useRef(1)
  const childRef = useRef(null)

  useEffect(()=>{
    console.log('ref:deom-init', domRef, domRef.current)
    console.log('ref:child-init', childRef, childRef.current)
  })

  const showChild = ()=>{
    console.log('ref:child', childRef, childRef.current)
    childRef.current.say()
  }

  return (
    <div style={{margin:'100px', border:'2px dashed', padding:'20px'}}>
      <h2>这是外层组件</h2>
      <div onClick={()=>{
        console.log('ref:dome', domRef, domRef.current)
        domRef.current.focus()
        domRef.current.value = 'hh'
      }}>
        <label>这是一个dom节点</label><input ref={domRef}/>
      </div>
      <br/>
      <p onClick={showChild} style={{marginTop:'20px'}}>这是子组件</p>
      <div style={{border:'1px solid', padding:'10px'}}>
        <Child ref={childRef}/>
      </div>
    </div>
  )
}
