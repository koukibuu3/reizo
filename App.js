import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import {Icon} from 'native-base';

// Screens
import HomeScreen from './screens/HomeScreen';
import NextScreen from './screens/NextScreen';
import InfoScreen from './screens/InfoScreen';

const bottomTabNavigatorConfig = {
  initialRouteName: 'Home',
  tabBarOptions: {showLabel: false},
};

const Tab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" style={{color: tintColor}} />
        ),
      }),
    },
    Next: {
      screen: NextScreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="list" style={{color: tintColor}} />
        ),
      }),
    },
    Info: {
      screen: InfoScreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon name="settings" style={{color: tintColor}} />
        ),
      }),
    },
  },
  bottomTabNavigatorConfig,
);

const App = () => {
  const Layout = createAppContainer(Tab);
  return (
    <>
      <Layout />
    </>
  );
};

export default App;
