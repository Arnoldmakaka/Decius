import React, {Component} from 'react';
import {Platform, Dimensions, AsyncStorage, YellowBox, ImageBackground, Button, Alert, ScrollView, StyleSheet, Share, Text, Modal, View, StatusBar, Picker, TextInput, KeyboardAvoidingView, Image, TouchableHighlight, TouchableOpacity, Linking} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base';


export default props => {
  return (
   	<View style={{flex:1,}}>
    	<Card>
    		<CardItem cardBody>
              <Image source={props.imageUri} style={{height: 200, width: '100%', flex: 1,}}/>
            </CardItem>
            <CardItem>  
              <Left>
                <Text>Roy Sucks</Text>
              </Left>
            </CardItem>
          </Card>
    </View>   
  );
};
