import React, {Component} from 'react';
import {Platform, Dimensions, AsyncStorage, YellowBox, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {Icon, Spinner} from 'native-base';
import firebase from 'react-native-firebase';

import CardViews from './card/CardViews';

export default class Home extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#000000'}}>
        <View style={{height: 24,}}>
          <StatusBar barStyle = "light-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
        </View>

        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
          <View style ={{height: 70, backgroundColor: '#000000', borderBottomRightRadius: 35}}>
            <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingBottom: 15, paddingTop: 20,}}>
              <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                <Text style={{color: '#ffffff', fontSize: 26, fontStyle: 'normal', fontWeight: '400',  }}>Decius</Text>
              </View>

              <View style={{justifyContent: 'flex-start', alignItems: 'flex-start', }}>
                <Text style={{color: '#71bf44', fontSize: 24, fontStyle: 'italic', fontWeight: '400',  }}>Eats</Text>
              </View>
            </View>
          </View>
          
          <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            
            <View style={{ marginTop: 10,}}>
              <View style={{flexDirection: 'row', alignItems: 'flex-end',  paddingHorizontal: 50, justifyContent: 'space-between'}}>
                
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: 100, width: 100, borderRadius: 50, backgroundColor: '#000000'}}>
                  <Text style={{paddingHorizontal: 5, color: '#ffffff', textAlign: 'center', alignItems: 'center', justifyContent: 'center',}}>+</Text>
                  <Text style={{paddingHorizontal: 5, color: '#ffffff', textAlign: 'center', alignItems: 'center', justifyContent: 'center',}}>Create Diet</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: 80, width: 80, borderRadius: 40, backgroundColor: '#71bf44'}}> 
                  <Text style={{paddingHorizontal: 5, color: '#ffffff', textAlign: 'center', alignItems: 'center', justifyContent: 'center',}}>+</Text>
                  <Text style={{paddingHorizontal: 5, color: '#ffffff', textAlign: 'center', alignItems: 'center', justifyContent: 'center',}}>Make Order</Text>  
                </TouchableOpacity>  

              </View>
            </View>

            <View style={{flex: 1, backgroundColor: '#ffffff',}}>
              
              <View style={{flex: 1, backgroundColor: '#ffffff',}}>
                
                <View style={{flexDirection: 'row',}}>
                  <Text style={{paddingLeft: 10, paddingVertical: 7, color: '#000000', fontStyle: 'italic', fontWeight: '500', fontSize: 18,}}>Foods of the </Text>
                  <Text style={{paddingVertical: 7, color: '#71bf44', fontStyle: 'italic', fontWeight: '500', fontSize: 18,}}>Day</Text>
                </View>
                
                <ScrollView style={{flex: 1,}}>
                  <View style={{paddingHorizontal: 10,}}>
                    <CardViews imageUri={require('../assests/chatbackone.jpeg')} />
                    <CardViews imageUri={require('../assests/chatbacktwo.jpeg')} />
                    <CardViews imageUri={require('../assests/chatbackthree.jpeg')} />
                    <CardViews imageUri={require('../assests/chatbacktwo.jpeg')} />
                    <CardViews imageUri={require('../assests/chatbackone.jpeg')} />
                  </View>
                </ScrollView> 


                  <View style={{backgroundColor: 'rgba(255,255,255,0.9)', paddingHorizontal: 10, justifyContent: 'flex-end', alignItems: 'flex-start', }}>
                    <TouchableOpacity style={{position: 'absolute', }}>
                      <Icon name="menu" style={{paddingHorizontal: 10, paddingVertical: 10, color: '#000000'}} size={80} />
                    </TouchableOpacity>
                  </View>
              </View>

            </View>

          </View>
        
        </View>

      </View>
    );
  }
}
