import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'

import HomePage from "../../Pages/Home/HomePage"
import ProjectsPage from "../../Pages/Projects/ProjectsPage/ProjectsPage"

const Main = () => (
    // Seems to not be using "exact path" on the home page... will investigate later if i have time
    <main>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/projects`} component={ProjectsPage}/>
        <Route exact path={`${process.env.PUBLIC_URL}`} component={HomePage}/>
      </Switch>
    </main>
  )

export default Main