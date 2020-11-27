/**
 * Created by ever on 2020/1/13.
 */
import React, {createContext, Fragment, useContext, useState} from 'react'

const CountContext = createContext()

function Counter() {
    const count = useContext(CountContext)
    return (
        <h2>{count}</h2>
    )
}


function Demo04() {
    const [count, setCount] = useState(0)
    return (
        <Fragment>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </Fragment>
    )
}

export default Demo04
