/**
 * Created by ever on 2020/10/15.
 * 对于使用Recoil的组件，需要将RecoilRoot放置在组件树上的任一父节点处，最好将其放在根组件中
 */
import React from 'react'
import {RecoilRoot} from 'recoil'
import TodoList from './todoList'

// const textState = atom({
//   key: 'textState',
//   default: '',
// })
//
// const charCountState = selector({
//   key: 'charCountState',
//   get: ({get}) => {
//     const text = get(textState)
//     return text.length
//   },
// })
//
// function CharacterCounter() {
//   return (
//     <div>
//       <TextInput/>
//       <CharacterCount/>
//     </div>
//   )
// }
//
// function CharacterCount() {
//   const count = useRecoilValue(charCountState)
//   return <>Character Count: {count}</>
// }
//
// function TextInput() {
//   const [text, setText] = useRecoilState(textState)
//
//   const onChange = (e) => {
//     setText(e.target.value)
//   }
//
//   return (
//     <div>
//       <input type="text" value={text} onChange={onChange}/>
//       <br/>
//       Echo:{text}
//     </div>
//   )
// }

export default function App() {
  return (
    <RecoilRoot>
      <TodoList/>
      {/*<CharacterCounter/>*/}
    </RecoilRoot>
  )
}
