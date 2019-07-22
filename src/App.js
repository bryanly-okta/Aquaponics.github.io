
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
//import withFirebaseAuth from 'react-with-firebase-auth';
//import * as firebase from 'firebase/app';
import 'firebase/auth';
//import firebaseConfig from './firebaseConfig';

//import Firebase from './components/auth/Firebase';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import Login from './components/auth/Login';
import About from './components/pages/About';
import Live from './components/pages/Live';
//import Employees from './components/pages/Employees';


import './App.css';

function onAuthRequired({history}) {
  history.push('/login');
}

//const firebaseApp = firebase.initializeApp(firebaseConfig);
// //-------Firebase Start-----------
// const firebaseAppAuth = firebaseApp.auth();
// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };
//
// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);
// //-------Firebase End-----------

class App extends Component {
  render() {
  const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;

    return(
        <Router>
        <Security issuer='https://bry.okta.com/oauth2/default'
               client_id='0oa4fevon4q5nbVe02p7'
               redirect_uri={window.location.origin + '/implicit/callback'}
               onAuthRequired={onAuthRequired} >

          <div className="App">
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home}/>
            <SecureRoute path="/staff" exact={true} component={Staff}/>
            <Route path='/login' render={() => (<Login baseUrl='https://bry.okta.com' />)} />
            <Route path='/implicit/callback' component={ImplicitCallback} />
            <Route path="/about" exact={true} component={About}/>
            <Route path="/live" exact={true} component={Live}/>

            </div>
          </div>
          </Security>
        </Router>
      );
  }
}

export default App;
