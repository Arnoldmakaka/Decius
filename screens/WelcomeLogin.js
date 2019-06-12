import React, {Component} from 'react';
import {Platform, AsyncStorage, YellowBox, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {Icon, Spinner} from 'native-base';
import firebase from 'react-native-firebase';

YellowBox.ignoreWarnings(['Warning: componentWill'])
console.disableYellowBox = true;

export default class WelcomeLogin extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      message: ''
    }
  }

  login = () => {
    let {email, password} = this.state
    if (this.state.email != '' && this.state.password != ''){
      this.setState({
        loading:true,
        message: ''
      })
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.navigation.navigate('Agree');
      })
      .catch((err) => {
        this.setState({
          loading:false,
          message: err.message
        })
      })
    }
    else{
      Alert.alert("Misiing Fields", "Please fill in all required fields")
    }
  }

  render() {
    let{message, loading} = this.state
    return (
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        
        <View style={{backgroundColor: '#ffffff'}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row',}}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Sign')}>
                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#000000'}} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
          <ScrollView>
            <KeyboardAvoidingView style={{flex: 1,}} behavior="padding" enabled>
              <View style={{flex: 1,}}>
                {loading ? <Spinner color="blue" /> : <Text>{message}</Text>}
                <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'flex-start',}}>
                  <Text style={{fontSize: 18, fontStyle: 'normal', fontWeight: '400', color: '#000000', paddingVertical: 15,}} >Log into Account with your Email</Text>
                  <TextInput keyboardType = 'email-address' onChangeText={(email)=>this.setState({email})} placeholder="Your email" style={{textAlign: 'left', height: 40, color: '#71bf44', borderBottomColor: '#71bf44', borderBottomWidth: 2, marginVertical: 7}}/>
                  <TextInput keyboardType = 'default' secureTextEntry onChangeText={(password)=>this.setState({password})} placeholder="Password***" style={{textAlign: 'left', height: 40, color: '#71bf44', borderBottomColor: '#71bf44', borderBottomWidth: 2, marginVertical: 7}}/>
                </View>
              </View> 

              <View>
                <TouchableOpacity onPress={this.login} style={{backgroundColor: '#71bf44',}}>
                  <Text style={{textAlign: 'center', fontSize: 16, color: '#ffffff', paddingVertical: 10, paddingHorizontal: 70,}}>Next</Text>
                </TouchableOpacity>
              </View>
               
            </KeyboardAvoidingView>
            
          </ScrollView>  
        </View>

      </View>
    );
  }
}