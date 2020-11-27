/**
 * Created by ever on 2020/1/15.
 */
import React, {Fragment, useEffect, useRef, useState} from 'react'

function Index() {
    const inputEl = useRef(null)
    const onButtonClick = (e) => {
        inputEl.current.value = 'Hello world'
        console.log(inputEl)
    }

    const [text, setText] = useState('ever')
    const textRef = useRef()
    useEffect(() => {
        textRef.current = text
        console.log('textRef.current', textRef.current)
    })
    return (
        <Fragment>
            <input ref={inputEl} type='text'/>
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br/>
            <br/>
            <input type="text" onChange={(e) => {
                setText(e.target.value)
            }}/>
        </Fragment>
    )
}

export default Index
