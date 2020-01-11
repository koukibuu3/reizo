/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// import screens
import Home from './screens/Home';
import List from './screens/List';

// Tab
const Tab = createBottomTabNavigator(
  {
    Tab1: { screen: Home },
    Tab2: { screen: List },
  }
);

export default class App extends React.Component {
  render() {
    const Layout = createAppContainer(Tab);
    return (
      <Layout/>
    );
  }
}
