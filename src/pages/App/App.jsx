import './App.css';
import { Component } from 'react';
import React from 'react';
import AuthPage from '../AuthPage/AuthPage';
import Nav from '../../components/Nav/Nav.jsx';
import {Redirect, Route, Switch} from 'react-router-dom';
import MyThoughts from '../../pages/MyThoughts/MyThoughts';
import NewThought from '../../pages/NewThought/NewThought';
import Resources from '../../pages/Resources/Resources';
import ThoughtDetail from '../ThoughtDetail/ThoughtDetail';
import About from '../About/About';
import Mindlessness from '../Mindlessness/Mindlessness';
import LogInPic from '../../components/LoginInPic/LogInPic';

import comic from '../../images/thisIsFineComic.jpg';

export default class App extends Component {
  state = {
    user: null,
  }

  // if the user clicks signup/login (and is legit), put the user in state.
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  
  // when the page refreshes, check localStorage for the user jwt token
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // decode token
      if (payload.exp < Date.now() / 1000) {  // Check if our token is expired, and remove if it is (standard/boilerplate)
        localStorage.removeItem('token');
        token = null;
      } else { // token not expired! our user is still 'logged in'. Put them into state.
        let userDoc = payload.user // grab user details from token
        this.setState({user: userDoc})      
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        { this.state.user ? 
          <div>
          <Nav setUserInState={this.setUserInState}/>
          {/* <Redirect to="/about" /> */}
          <Switch>
            <Route path="/thoughts/:id" render={props =>
              <ThoughtDetail {...props}/>
            } />
            <Route path='/about' render={props =>
              <About {...props}/>
            } />
            <Route path='/mythoughts' render={props =>
              <MyThoughts user={this.state.user} {...props}/>
            } />
            <Route path='/newthought' render={props =>
              <NewThought user={this.state.user} {...props}/>
            } />
            <Route path='/resources' render={props =>
              <Resources {...props}/>
            } />
            <Route path='/mindlessness' render={props =>
              <Mindlessness {...props}/>
            } />  
          
          <Redirect to="/about" />
          </Switch>
          </div>
            :
          <div>
          <LogInPic pic={comic} />
          <AuthPage setUserInState={this.setUserInState}/>
          </div>
        }  
      </div>
    )
  }
}
