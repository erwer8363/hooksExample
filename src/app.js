/**
 * Created by ever on 2020/1/10.
 */
import React, {Fragment, useEffect, useState} from 'react'
import {BrowserRouter as Router, Link, Redirect, Route} from 'react-router-dom'

function Index() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！Index页面')
        return () => {
            console.log('useEffect=>老弟，你走了！Index页面')
        }
    }, [])
    return (<h1>Jspang.com</h1>)
}

function List() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！List页面')
        return () => {
            console.log('useEffect=>老弟，你走了！List页面')
        }
    })
    return (<h1>List-page</h1>)
}

function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`useEffect you click ${count} times`)
    })


    return (
        <Fragment>
            <p>you clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>click Me</button>
            <Router>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/list'>List</Link></li>
                </ul>
                <Route path='/home' component={Index}/>
                <Route path='/list' component={List}/>
                <Redirect from='/' exact to='/home'/>
            </Router>
        </Fragment>
    )
}

export default App
