import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var Parse = require('parse/react-native');
var Button = require('../common/button');

module.exports = React.createClass({
  componentWillMount: function() {
    this.setState({user: Parse.User.current()} );
  },
  getInitialState: function() {
    return { user: null };
  },
  render: function() {
    if(!this.state.user) {
      return <Text>Loading... </Text>
    }
    var username = this.state.user.get('username');
    return (
      <View style={styles.container}>
        <Text>Welcome back, {username}!</Text>
        <Button text={'Sign Out'} onPress={this.onSignOutPress}/>
      </View>
    );
  },
  onSignOutPress: function() {
    Parse.User.logOut();
    this.props.navigator.immediatelyResetRouteStack([{name: 'signin'}]);
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
