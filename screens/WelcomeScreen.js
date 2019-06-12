import React, {Component} from 'react';
import {Platform, AsyncStorage, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {Icon} from 'native-base';

export default class WelcomeScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
        
        <View style={{flex: 3,}}>
          <ImageBackground source={require('../assests/back.jpeg')} style={{width: '100%', height: '100%', flex: 1}}>
            <View style={{height: 24,}}>
              <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
            </View>
            
            <View style={{flex: 1,}}>
              <View style={{paddingHorizontal: 12, paddingVertical: 10,}}>
                <Text style={{fontSize: 30, color: '#ffffff', fontWeight: '400', paddingVertical: 0,}}>Decius</Text>
                <Text style={{fontSize: 28, color: '#71bf44', fontWeight: '400', paddingVertical: 0,}}>Eats</Text>
              </View>
            </View>  
          </ImageBackground>
        </View> 
        
        <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 15,}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <Text style ={{textAlign: 'center', color: '#000000', fontSize: 18, fontWeight: '300',}}>Tap Continue to get started with Decius</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign')} style={{marginVertical: 7, marginHorizontal: 20, borderRadius: 4, borderWidth: 2, borderColor: '#71bf44'}}>
              <Text style={{textAlign: 'center', fontSize: 16, color: '#71bf44', paddingVertical: 7, paddingHorizontal: 70,}}>Continue</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{textAlign: 'center', fontSize: 14, fontStyle: 'normal', color: '#000000', paddingBottom: 3,}}>Powered by Arnoldmakaka && Roy</Text>
            <Text style={{textAlign: 'center', fontSize: 12, fontStyle: 'italic', color: '#71bf44'  }}>{'\u00A9'}Arnold&Roy</Text>
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
