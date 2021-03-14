import React, { useState } from 'react';
import { Navbar, Footer, Sidebar } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Usluge from './pages/Usluge/Usluge';
import About from './pages/About/About';
import Forma from './pages/Forma';
import GlobalStyle from './globalStyles';
function App() {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
     setIsOpen(!isOpen);
   };
  return (
    <Router>
      <GlobalStyle />
      <Sidebar isOpen={isOpen} toggle={toggle} />
     <Navbar toggle={toggle}/>
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/usluge' component={Usluge} />
       <Route path='/about' component={About} />
       <Route path='/forma' component={Forma} />
     </Switch>
     <Footer />
    </Router>
  );
}

export default App;
