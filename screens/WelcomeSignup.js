import React, {Component} from 'react';
import {Platform, AsyncStorage, YellowBox, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import {Icon, Spinner} from 'native-base';
import firebase from 'react-native-firebase';

YellowBox.ignoreWarnings(['Warning: componentWill'])
console.disableYellowBox = true;

export default class WelcomeSignup extends Component{
  constructor(props) {
    super(props);
    this.state ={
      phoneNumber: '+256',
      loading: false,
      message: '',
      name: '',
      email: '',
      password: '',
    }
  }

  signIn = () => {
    let {email, password, name, phoneNumber} = this.state
    if (this.state.email != '' && this.state.phoneNumber != '' && this.state.name != ''  && this.state.password != ''){
      this.setState({
        loading:true,
        message: ''
      })
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
          firebase.auth().currentUser.updateProfile({
            displayName: name
          }).then(() => {
            //after updating the profile
            this.props.navigation.navigate('Agree');
          })
          .catch((err) => {
            this.setState({
              loading:false,
              message: err.message
            })
            this.props.navigation.navigate('Agree');
        })
      })
    }
    else{
      Alert.alert("Misiing Fields", "Please fill in all required fields")
    }
  }

  render() {
    let { phoneNumber, loading, message} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        
        <View style={{backgroundColor: '#ffffff'}}>
          <View style={{height: 24,}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor={'transparent'} translucent = {true}/>
          </View>

          <View style={{height: 56, flexDirection: 'row',}}>
            <View style={{alignItems: 'center', justifyContent: 'center',}}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')}>
                <Icon name="arrow-back" style={{paddingLeft: 15, paddingRight: 25, color: '#000000'}} size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
          <ScrollView>
            <View style={{paddingVertical: 10, justifyContent: 'flex-end', alignItems: 'flex-end', paddingHorizontal: 20,}}>
              <TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{textAlign: 'right', fontSize: 13, fontStyle: 'italic', color: '#71bf44'}}>Already have an account?</Text>
              </TouchableOpacity>
            </View>
            <KeyboardAvoidingView style={{flex: 1,}} behavior="padding" enabled>
              <View style={{flex: 1,}}>
                {loading ? <Spinner color="blue" /> : <Text>{message}</Text>}
                <View style={{flex: 1, paddingHorizontal: 20, justifyContent: 'flex-start',}}>
                  <TextInput autoFocus onChangeText={(name)=>this.setState({name})} placeholder="User name" style={{textAlign: 'left', color: '#71bf44', height: 40, borderBottomColor: '#71bf44', borderBottomWidth: 2, marginVertical: 7}}/>
                  <TextInput keyboardType = 'phone-pad' value={phoneNumber} onChangeText={value => this.setState({ phoneNumber: value })} placeholder="752002105" style={{textAlign: 'left', height: 40, color: '#71bf44', borderBottomColor: '#71bf44', borderBottomWidth: 2, marginVertical: 7}}/>
                  <Text style={{fontSize: 18, fontStyle: 'normal', fontWeight: '400', color: '#000000', paddingVertical: 15,}} >Create an account with your Email</Text>
                  <TextInput keyboardType = 'email-address' onChangeText={(email)=>this.setState({email})} placeholder="Your email" style={{textAlign: 'left', height: 40, color: '#71bf44', borderBottomColor: '#71bf44', borderBottomWidth: 2, marginVertical: 7}}/>
                  <TextInput keyboardType = 'default' secureTextEntry onChangeText={(password)=>this.setState({password})} placeholder="Password***" style={{textAlign: 'left', height: 40, color: '#71bf44', borderBottomColor: '#71bf44', borderBottomWidth: 2, marginVertical: 7}}/>
                </View>
              </View> 

              <View>
                <TouchableOpacity onPress={this.signIn} style={{backgroundColor: '#71bf44',}}>
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