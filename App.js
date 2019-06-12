import React, {Component} from 'react';
import {Platform, AsyncStorage, YellowBox, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import firebase from 'react-native-firebase';
import {Icon, Spinner} from 'native-base';

import WelcomeNavigation from './screens/WelcomeNavigation';
import ToDashboard from './screens/ToDashboard';

class App extends Component {

  constructor(){
    super()
    this.unsubscriber = null;
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      if(user){
        //todo wen logged in
        this.props.navigation.navigate('Todash');
      }
      else {
        //todo wen not logged in
        this.props.navigation.navigate('Welcomenavigate');
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  render() {
    return <Spinner color="green" />
  }
}

const AppSwitch = createSwitchNavigator(
{
  Index: App,
  Welcomenavigate: WelcomeNavigation,
  Todash: ToDashboard
},{
    defaultNavigationOptions:{
      header:null,
    }
  }
);

const AppContainer = createAppContainer(AppSwitch);

export default AppContainer;