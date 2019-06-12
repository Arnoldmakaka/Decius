import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {Icon} from 'native-base';

import WelcomeScreen from './WelcomeScreen';
import WelcomeLogin from './WelcomeLogin';
import WelcomeSignup from './WelcomeSignup';
import AgreeTerms from './AgreeTerms';
import ToDashboard from './ToDashboard';

class WelcomeNavigation extends Component{
  render() {
    return (
      <AppContainer />
    );
  }
}
export default WelcomeNavigation;

const AppStack = createStackNavigator(
{
	Welcome: {screen: WelcomeScreen},
    Sign: {screen: WelcomeSignup},
    Login: {screen: WelcomeLogin},
},
{
	defaultNavigationOptions: {
      header: null,
	} 
}
);

const AppSwitchNavigator = createSwitchNavigator({
  Onload: {screen: AppStack},		
  Welcome: {screen: WelcomeScreen},
  Login: {screen: WelcomeLogin},
  Sign: {screen: WelcomeSignup},
  Agree: {screen: AgreeTerms},
  Dash: {screen: ToDashboard}
});

const AppContainer = createAppContainer(AppSwitchNavigator); 

