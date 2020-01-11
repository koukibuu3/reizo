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

// import {Icon} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

// import screens
import Home from './screens/HomeScreen';
import Reizo from './screens/ReizoScreen';

// Tab
const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={24} />
        ),
      }),
    },
    Reizo: {
      screen: Reizo,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="list" color={tintColor} size={21} />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: true,
    },
  },
);

export default class App extends React.Component {
  render() {
    const Layout = createAppContainer(Tab);
    return <Layout />;
  }
}
