import React, { Component } from 'react';
import { Text,View } from 'react-native';
import { Thumbnail } from 'native-base';

export default class DrawerAvatar extends Component {
    render() {
      return (
        <View >
            <Thumbnail square large style={{width: '100%',height: 140,justifyContent: 'center',alignSelf: 'baseline',alignItems: 'center',alignContent: 'center'}} source={require('../assets/profile-bg.png')} />
          <View style={{alignItems:"center",justifyContent:"space-around",width: '100%',backgroundColor:"#4c76be",paddingBottom:20,}}>
            <Thumbnail large source={{uri: 'https://www.w3schools.com/howto/img_avatar.png'}} style={{marginTop: -55,borderWidth: 1,borderColor: '#fff'}} />
            <Text style={{color: 'white', fontSize:16,textAlign: 'left',fontWeight: 'bold',}}>Mr Muhammad Arsalan</Text>
            <Text style={{color: 'white', fontSize:12,textAlign: 'left',}}>Last active on: 5:50 PM</Text>
          </View>
        </View>

      
      );
    }
  };