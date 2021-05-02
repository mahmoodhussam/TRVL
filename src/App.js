import './App.css';
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Products from './components/pages/Products';
import Services from './components/pages/Services'
import Signup from './components/pages/Signup';
import Contact from './components/pages/Contact';
function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route 
          path='/' exact
          component = {Home} 
          />
          <Route 
           path="/contact"
           component={Contact}
          />
          <Route 
          path="/products"
          component={Products}
          />
          <Route
          path="/services"
          component={Services}
          />
          <Route 
          path="/sign-up"
          component={Signup}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
