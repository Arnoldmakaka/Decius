import React, {Component} from 'react';
import {Platform, AsyncStorage, YellowBox, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {Icon, Spinner} from 'native-base';

export default class AgreeTerms extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#ffffff'}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row',}}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
              
            </View>
          </View>
        </View>

        <View style={{flex: 1,}}>
          <View style={{flex: 1, paddingHorizontal: 20,}}>
            <Text style={{textAlign: 'center', fontSize: 18, fontStyle: 'normal', fontWeight: '400', color: '#000000', paddingVertical: 10,}}>By tapping Next, you agree to Decius's Terms of Use and acknowledge that you have read the Privacy Policy.</Text>
          </View>

          <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Dash')} style={{backgroundColor: '#71bf44',}}>
              <Text style={{textAlign: 'center', fontSize: 16, color: '#ffffff', paddingVertical: 10, paddingHorizontal: 70,}}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
