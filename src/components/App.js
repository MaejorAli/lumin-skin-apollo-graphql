import { Switch, Route } from 'react-router-dom'
import React, {Fragment} from 'react'
import Header from './Header'
import Products from '../pages/Products'

const App = () => (
  <Fragment>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={Products} />
      </Switch>
    </div>
  </Fragment>
)

export default App
