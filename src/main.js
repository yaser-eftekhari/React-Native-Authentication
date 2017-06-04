import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

var Parse = require('parse/react-native');
var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');
var MainApp = require('./components/mainApp/mainApp');

var ROUTES = {
  signin: Signin,
  signup: Signup,
  mainApp: MainApp
};

module.exports = React.createClass({
  componentWillMount: function() {
    Parse.initialize('myAppId','unused');
    Parse.serverURL = 'https://pacific-eyrie-88962.herokuapp.com/parse';
  },
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator}/>
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => {return Navigator.SceneConfigs.FloatFromRight;}}
      />);
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
