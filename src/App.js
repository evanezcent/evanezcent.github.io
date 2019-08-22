import React from 'react';
import './App.css';
import './css/index.css';
import './css/hover.css';
import './css/animate.css';
import './css/bootstrap.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


// COMPONENTS
import Header from './components/header'
import Content from './components/content'
import Content2 from './components/content2'
import Content3 from './components/content3'
import Footer from './components/footer'

function App() {
  return (
    // TODO: routernya ga jalan, malah ga keluar pagenya
    <Router>
      <div className="App">
        <div className="container">
          <div id="main">
            <Header />
            <Switch>
              <Route path="/" exact component={Content} />
              <Route path="/portofolio" component={Content2} />
              <Route path="/reference" component={Content3} />
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
