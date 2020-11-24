import React, { Component } from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';

import HomePage from "../../Pages/Home/HomePage";
import ProjectsPage from "../../Pages/Projects/ProjectsPage/ProjectsPage";
import BlogPage from "../../Pages/Blog/BlogPage/BlogPage";

import YVUDocumentation from '../../Pages/Projects/YVUDocumentation/YVUDocumentation'; 
const Main = () => (
    // Seems to not be using "exact path" on the home page... will investigate later if i have time
    <main>
      <HashRouter>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={BlogPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/projects`} component={ProjectsPage}/>
          <Route exact path={`${process.env.PUBLIC_URL}/YVUDocumentation`} component={YVUDocumentation}/>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={HomePage}/>
        </Switch>
      </HashRouter>
    </main>
  )

export default Main