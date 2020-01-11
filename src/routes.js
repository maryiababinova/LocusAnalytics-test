import React from 'react';
import App from './App'
import Cat from './Cat'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
    <div>
      {/* <nav>
        <Link to="/" className="nav-link">Welcome!</Link>
        <Link to="/campuses" className="nav-link">Campuses</Link>
        <Link to="/students" className="nav-link">Students</Link>
      </nav> */}
      <main>
        <Switch>
          {/* <Route exact path="/" render = {() => <h1>Welcome!</h1>} /> */}
          <Route exact path="/" component={App} />
          <Route exact path="/:id" render={(props) => <Cat {...props} cat={props.cat}/>}/>
        </Switch>
      </main>
    </div>
    </BrowserRouter>
  )
}

export default Routes
