/**
 * Created by ever on 2020/7/17.
 */
import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch, useParams} from 'react-router-dom'

function About() {
  const {id} = useParams()
  return (
    <h1>Aboutsdfsdf:{id}</h1>
  )
}

function Home() {
  return (
    <h1>Home</h1>
  )
}

function DashBoard() {
  return (
    <h2>Dashboard</h2>
  )
}

function Index() {
  return (
    <Router>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about/123'}>About</Link></li>
        <li><Link to={'/dashBoard'}>DashBoard</Link></li>
      </ul>
      <br/>
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/about/:id'} component={About}/>
        <Route path={'/dashboard'} component={DashBoard}/>
      </Switch>
    </Router>
  )
}

export default Index
