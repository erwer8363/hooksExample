/**
 * Created by ever on 2020/8/29.
 */
import React, {Fragment} from 'react'
import useProtal from './Index'
import {animated,useSpring} from 'react-spring'

export default function App() {
  const {Protal,handleClose,handleShow, isShow} = useProtal()
  const animation = useSpring({
    reverse: !isShow,
    to:{opacity:1},
    from:{opacity:0}
  })
    return (
      <Fragment>
        <div>状态：{JSON.stringify(isShow)}</div>
        <button onClick={handleShow}>弹出</button>
        <Protal>
          <animated.div style={animation} className={"popup"}>
            <div>这是一个简单的弹框</div>
            <button onClick={handleClose}>关闭</button>
          </animated.div>
        </Protal>
      </Fragment>
    )
}
