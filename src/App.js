import React from 'react'
import Home from './Home'
import {Route,Switch,Link } from 'react-router-dom'
import MovieTrailer from './Components/MovieTrailer'

export default function App(){
  return(
    <>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path="/:id" component={MovieTrailer}/>
    </Switch>
    </>
  )
}