import React from 'react';

import HomeScreen from './screens/HomeScreen';
import NextScreen from './screens/NextScreen';
import InfoScreen from './screens/InfoScreen';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';

const Tab = createBottomTabNavigator({
  Tab1: {screen: HomeScreen},
  Tab2: {screen: NextScreen},
  Tab3: {screen: InfoScreen},
});

const App = () => {
  const Layout = createAppContainer(Tab);
  return (
    <>
      <Layout />
    </>
  );
};

export default App;
