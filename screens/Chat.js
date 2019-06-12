import React, {Component} from 'react';
import {Platform, Dimensions, AsyncStorage, YellowBox, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {Icon, Spinner} from 'native-base';
import firebase from 'react-native-firebase';
import Carousel from 'react-native-looped-carousel';

import Chatting from './chat/Chatting';

const { width, height } = Dimensions.get('window');

export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={4000}
          style={this.state.size}
          autoplay
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}
        >
        <View style={{height: 24,}}>
          <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
        </View>
          
          <View style={[{position: 'absolute',}, this.state.size]}>
              <Text>HHSDJKLAHSJDADA</Text>
          </View>

          <View style={[{ backgroundColor: '#BADA55' }, this.state.size]}><Text>1</Text></View>
          <View style={[{ backgroundColor: 'red' }, this.state.size]}><Text>2</Text></View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Text>3</Text></View>
        </Carousel>
      
      </View>
    );
  }
}