import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="page-contanier">
         <div className="page-wrap">
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact  component={About} />
        <Route path='/about'  component={About} /> 
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
        <Route path='/resume' component={Resume} />
      </Switch>
    </Router>
     </div>
    <Footer/>
   </div>
  );
}

export default App;
