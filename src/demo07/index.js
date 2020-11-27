/**
 * Created by ever on 2020/1/13.
 */
import React, {Fragment, useMemo, useState} from 'react'

function ChildComponent({name, children}) {
    function changeXiaoHong(name) {
        console.log('他来了,他来了,小红向我们走来了')
        return name + ',小红向我们走来了'
    }

    const actionXiaoHong = useMemo(() => changeXiaoHong(name), [name])
    return (
        <Fragment>
            <div>{actionXiaoHong}</div>
            <div>{children}</div>
        </Fragment>
    )
}

function Index() {
    const [xiaohong, setXiaoHong] = useState('小红节课状态')
    const [zhiling, setZhiling] = useState('志玲节课状态')
    return (
        <Fragment>
            <button onClick={() => setXiaoHong(new Date().getTime())}>小红</button>
            <button onClick={() => setZhiling(new Date().getTime() + ',志玲向我们走来了')}>志玲</button>
            <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
        </Fragment>
    )
}

export default Index
