import React, {Component} from 'react';
import {View, ImageBackground, StyleSheet,} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import {Thumbnail,Text } from 'native-base';
import Animated from 'react-native-reanimated';
// import {BorderlessButton} from 'react-native-gesture-handler';
// import * as Animatable from "react-native-animatable";

class StartupScreen extends Component {
  state = {
    loading: true,
  };
  tryLogin = async () => {
   
    this.setState({loading: false});
    this.props.navigation.navigate('slider');

    
  };

  componentDidMount() {
    setTimeout(() => {
      this.tryLogin();
    }, 3000);
  }

  componentWillUnmount() {
    this.setState({loading: false});
  }

  render() {
    return (
      <View style={styles.containerView}>
        <Animated.View style={{width:'100%',height:'100%',backgroundColor: '#f9943b'}}>
              <Animated.View  style={styles.logoView} delay={1500} animation="fadeInRight">

              <Thumbnail
                style={styles.thumnailStyle}
                square
                large
                source={require('../assets/logo.png')}
              />
              <Thumbnail
                style={styles.apptextStyle}
                square
                large
                source={require('../assets/app-text.png')}
              />
              </Animated.View>
            
          </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#24354f',
    justifyContent: 'center',
    alignContent: 'center',
  },
  logoView: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  thumnailStyle: {
    width: '50%',
    height: '25%',
    borderRadius: 1,
    marginBottom: 20
  },
  apptextStyle:{
    width: '65%',
    height: '15%'
  }
});

export default StartupScreen;
