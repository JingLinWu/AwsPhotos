/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import { withAuthenticator, Authenticator, SignIn, SignUp, ConfirmSignUp, Greetings } from 'aws-amplify-react-native';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

// Amplify.configure(aws_exports);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



const federated = {
    google_client_id: '',
    facebook_app_id: '',
    amazon_client_id: ''
};

Amplify.configure({
    Auth: {
        identityPoolId: 'us-east-1:6ffac2f7-ecf8-4163-a7c2-2d253e6290ca', 
        region: 'us-east-1', 
        userPoolId: 'us-east-1_UmHBzvEMi', 
        userPoolWebClientId: '14lf22uqvlkfpa1cs37ki15t6a', 
    },
});




  


type Props = {};
class App extends Component<Props> {

  _onButtnSignInPress(){
    console.log(">>> XXXX SignIn !!!!");

      // const data = await async Auth.signIn("mytest", "111111_Test");
      // console.log("XXXXX data:" + JSON.stringify(data));
      // if (data.signInUserSession === null) {
        // this.setState({ user: data, loading: false, modalShowing: true });
      // }

    Auth.signIn("mytest", "111111_Test")
    .then( res=>{
        console.log("XXXXX user!!!!");
    })
    .catch(err => console.log("XXXXX Err:"));

  }

  _onButtonSignUpPress(){
    console.log("XXXX SignUp");
    Auth.signUp( {
        username:"testuser3",
        password:"111111_Test",
        attributes: {
          email:"saaaass@gmail.com",
        }
    }).then(res => {
      // console.log("XXX signed up:" + JSON.stringify(res));
      console.log("XXX signed up success!!");
    }).catch(err=>{
      console.log("XXX err:" + JSON.stringify(err));
    })

  }



  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button onPress={this._onButtonSignUpPress} title="Sign Up !!!"/>
        <Button onPress={this._onButtnSignInPress} title="Sign IN"/>
        <Authenticator federated={federated} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
 // export default App;
module.exports = App;
// export default withAuthenticator(App);
