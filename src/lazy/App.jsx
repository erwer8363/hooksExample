/**
 * Created by ever on 2020/11/28.
 */
import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import HOCLazy from './HOCLazy'
import slow from './HOCLazy/slow'

const Page1 = HOCLazy(() => slow(import('./page/page1'), 3000))

export default function () {
  return (
    <Router>
      <div id='app'>
        <Switch>
          <Redirect path='/' exact to={{pathname: '/page1'}}/>
          <Route path='/page1' exact render={() => <Page1 content='Page1加载中。。。'/>}/>
        </Switch>
      </div>
    </Router>
  )
}
