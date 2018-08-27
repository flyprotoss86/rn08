import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules, StatusBar, NetInfo } from 'react-native';

import MyNavBar from './MyNavBar'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MyNavBar></MyNavBar>
    )
  }
  // componentWillMount(){
  //     NetInfo.fetch().done((reach)=>{
  //         console.log(reach)
  //     })
  //     this.removeListener = NetInfo.addEventListener('change', (status)=>{})
  //
  // }
  // componentWillUnmount(){
  //
  // }
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
