import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Showcase from './components/Showcase/Showcase'
import Footer from './components/Footer';
import './App.css';
import ScaleText from "react-scale-text";

import SportPage from './pages/SportPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

class App extends React.Component {

  
  constructor(props){
    super(props);
    this.state = {
      title: 'Matt K Cards',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'},
        { title: 'Basketball', path: '/basketball'},
        { title: 'Baseball', path: '/baseball'},
        { title: 'Football', path: '/football'}
      ],
      home:{
        
        className:'title-sub',
        title: 'Great Cards. Great Prices.',
        subTitle: 'projects',
        text: 'Find your next best investment below.',

      },
      about:{
        title: 'abt me'
      },
      contact: {
        title:'Let\'s talk'
      },
      basketball:{
        title:'Football'
      },
      baseball:{
        title:'Baseball'
      },
      football:{
        title:'Football'
      }



      
    }
  }
render(){
  return (
    <section className='backdrop'>
    <Router>
      <Container className="o-0" fluid={true}>
        

        <Navbar className="border-bottom" bg="transparent" expand="lg" variant="light">
        <Navbar.Brand className="navbar-brand p-0" bg="transparent">
        Matt K Cards
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" variant="dark"/>
        <Navbar.Collapse className="navbar-collapse" >
          <Nav className="ml-auto">
            <div className="parent grid-container">

            <div className="child grid-item" >
                <Link className="nav-link" to="/">Basketball</Link>
              </div>

              <div className="child grid-item">
                <Link className="nav-link" to="/">Football</Link>
              </div>

              <div className="child grid-item">
                <Link className="nav-link" to="/">Baseball</Link>
              </div>

              <div className="child grid-item">
                <Link className="nav-link" to="/">Home</Link>
              </div>
              <div className="child grid-item">
                <Link className="nav-link" to="/about">About</Link>
              </div>
              <div className="child grid-item">
                <Link className="nav-link" to="/contact">Contact</Link>

              </div>
            </div>


            </Nav>
        </Navbar.Collapse>

        </Navbar>
        <div className="titled">
        <Route  path="/" exact render={() => <HomePage  title={this.state.home.title} subTitle = {this.state.home.text}/>}/>
        <Route  path="/about" render={() => <AboutPage  title={this.state.about.title}/>}/>
        <Route path="/contact" render={() => <ContactPage  title={this.state.contact.title}/>}/>
        <Route path="/basketball" render={() => <SportPage  title={this.state.basketball.title}/>}/>
        <Route path="/football" render={() => <SportPage  title={this.state.football.title}/>}/>
        <Route path="/baseball" render={() => <SportPage  title={this.state.baseball.title}/>}/>
        </div>

        
        <Showcase/>

        <Footer bg="transparent" />
       
      </Container>

    </Router>
    </section>
  );
  }
}

export default App;

