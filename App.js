import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules } from 'react-native';
import {
    createBottomTabNavigator,
    createStackNavigator,
    createNavigationContainer,
    createConfigGetter,
    createDrawerNavigator,
    createKeyboardAwareNavigator,
    createMaterialTopTabNavigator,
    createNavigator,
    createSwitchNavigator,
    createTabNavigator
} from 'react-navigation'
import MyPage1 from './src/page/MyPage1'
import MyPage2 from './src/page/MyPage2'
import MyPage3 from './src/page/MyPage3'
import MyPage4 from './src/page/MyPage4'
import MyPage5 from './src/page/MyPage5'
import MyPage6 from './src/page/MyPage6'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const SimpleApp = createStackNavigator ({
    Home: {screen: MyPage1},
    Page2: {screen: MyPage2},
    Page3: {screen: MyPage3},
    Page4: {screen: MyPage4},
    Page5: {screen: MyPage5}
})
const TabApp = createNavigationContainer({
    Home: {screen: SimpleApp},
    Page: {screen: MyPage6}
})

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <TabApp/>
    )
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
