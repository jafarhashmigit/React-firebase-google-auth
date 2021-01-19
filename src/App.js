import React from 'react'
import  firebase  from "firebase";
import { StyledFirebaseAuth } from 'react-firebaseui'


firebase.initializeApp({
  apiKey: "AIzaSyCq6TswHsHzA8ZAaoJWNEeBnhG8Cp0KxdU",
  authDomain: "react-firebase--auth-34659.firebaseapp.com"
 })

class App extends React.Component {
  state = { isSignedIn: false }

  uiConfig = {
    signInFlow: "popup",
      signInOptions: [
       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
     callbacks: {
      signInSuccess: () => false
     }
  }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
    this.setState({ isSignedIn: !!user })
    console.log("user", user)
   })
  }
  render() { 
    return ( 
      <div>
        <div className="App">
            {this.state.isSignedIn ? (
                <span>
                  <div>Signed In!</div>

                    <button onClick={() => firebase.auth().signOut()}>
                    Sign out!
                    </button>

                    <h1>Welcome {firebase.auth().currentUser.displayName}</h1>

                    <img
                      alt="profile picture"
                      src={firebase.auth().currentUser.photoURL}
                    />
                </span>
                ) : (
                  <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
                )}
        </div>
      </div>
     );
  }
}
 
export default App;