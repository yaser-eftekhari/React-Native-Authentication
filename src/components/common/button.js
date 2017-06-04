import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

module.exports = React.createClass({
  render: function() {
    return <TouchableHighlight
      style={styles.button}
      underlayColor={'gray'}
      onPress={this.props.onPress}
      >
      <Text style={styles.buttonText}>{this.props.text}</Text>
    </TouchableHighlight>
  }
});

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    padding: 5,
    marginTop:  10
  },
  buttonText: {
    flex: 1,
    fontSize: 20,
    alignSelf: 'center'
  }
});
