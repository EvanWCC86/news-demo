import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
// import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CategoryPage from './pages/CategoryPage'
import HomePage from './pages/HomePage'
const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        {/* <Hero /> */}
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:id" component={CategoryPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
