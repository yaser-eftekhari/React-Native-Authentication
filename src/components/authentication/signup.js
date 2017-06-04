import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

var Button = require('../common/button');
var Parse = require('parse/react-native');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMessage: ''
    }
  },
  render: function() {
    return (
      <View style={styles.container}>
        <Text>Sign Up!</Text>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.input}
          value={this.state.username}
          onChangeText={(text) => this.setState({username: text})}
          />

        <Text style={styles.label}>Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.password}
          onChangeText={(text) => this.setState({password: text})}
          />

        <Text style={styles.label}>Confirm Password:</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          value={this.state.passwordConfirmation}
          onChangeText={(text) => this.setState({passwordConfirmation: text})}
          />

        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text={'Sign Up'} onPress={this.onSignUpress}/>
        <Button text={'I have an account ...'} onPress={this.onSignInPress}/>
      </View>
    );
  },
  onSignInPress: function() {
    this.props.navigator.pop();
  },
  onSignUpress: function() {
    if(this.state.password !== this.state.passwordConfirmation) {
      return this.setState({errorMessage: 'Your passwords do not match!'});
    }
    if(this.state.username === '') {
      return this.setState({errorMessage: 'Username cannot be empty'});
    }
    if(this.state.password === '') {
      return this.setState({errorMessage: 'Password cannot be empty'});
    }
    var user = new Parse.User();
    user.set("username", this.state.username);
    user.set("password", this.state.password);
    user.signUp(null, {
      success: (user) => { this.props.navigator.immediatelyResetRouteStack([{name: 'mainApp'}]); },
      error: (user, error) => {this.setState({errorMessage: error.message});}
    });
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
