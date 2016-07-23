/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SegmentTab from 'react-native-segment-tab'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Example extends Component {
  state={
    selected: 0
  }
  render() {
    return (
      <View style={styles.container}>
        <SegmentTab
          data={['Day1', 'Day2', 'Day3']}
          selected={this.state.selected}
          onPress={ index => this.setState({selected: index})}
        />
        <SegmentTab
          style={{marginTop: 40}}
          activeColor='#4078bf'
          selected={this.state.selected}
          onPress={ index => this.setState({selected: index})}
          orientation='vertical'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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

AppRegistry.registerComponent('Example', () => Example);
