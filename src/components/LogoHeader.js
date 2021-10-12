import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class LogoHeader extends Component {
    render() {
      return (
        <ImageBackground  source={require('../assets/logo.jpg')} style={{width: '100%', height: '100%'}}>
          <Ionicons style={{ padding: 10 }} onPress={() => this.props.navigation.openDrawer()} name="md-menu" color="white" size={36} />
        </ImageBackground>
      
      );
    }
  };