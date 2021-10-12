import React, {useState, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Button,
  Text,
  Thumbnail,
  Input,
  Item,
  Label,
  CheckBox,
  DefaultInput,
  Picker,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {loginAction} from '../redux/action/login.action';
import * as Animatable from "react-native-animatable";

// const userInfo = {username: 'john@gmail.com', password: '123'};

function LoginScreen({login, navigation}) {


  return (
    <ScrollView>
      <View style={styles.containerView}>
      <View  style={styles.topCont} animation="flipInX" iterationCount={1}>
          <Thumbnail
            large
            square
            style={styles.logoStyle}
            source={require('../assets/logo.png')}
          />
        </View>

        {/* <View  style={styles.letsContainer} animation="bounce" >
          <Text style={styles.letsStyle}>Let's begin</Text>
        </View> */}
        
       <View style={styles.btnContainer} animation="bounce" >
          <Button
            medium
            square
            onPress={()=> navigation.navigate('login')}
            style={styles.loginBtn}>
            <Text style={styles.loginText}>Login</Text>
          </Button>
        </View>

        <View style={styles.btnContainer} animation="bounce" >
          <Button
            medium
            square
            onPress={()=> navigation.navigate('signup')}
            style={{...styles.loginBtn, marginTop: 15}}>
            <Text style={styles.loginText}>Signup</Text>
          </Button>
        </View>

        {/* <View style={styles.orCont}>
          <View style={styles.singleLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.singleLine} />
        </View> */}

        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
    height: hp('98%'), 
    width: wp('100%'),
  },
  logoStyle: {
    height: '43%',
    borderRadius: 0,
    width: '35%',
  },
  letsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 20,
    paddingTop: 35,
  },
  letsStyle: {
    textAlign: 'left',
    fontFamily: 'tanseek-modern-pro-arabic',
    // fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5,
  },
  welcomeBack: {
    textAlign: 'left',
    color: '#747474',
    fontFamily: 'tanseek-ar-lt',
    fontSize: 13,
  },
  logoView: {
    flexDirection: 'row',
  },
  thumnailStyle: {
    marginTop: 20,
    marginBottom: 14,
    width: '27%',
    height: 95,
    borderRadius: 2,
    alignSelf: 'baseline',
    //borderRadius: 50,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 6,
    width: '96%',
  },
  forgotBtn: {
    backgroundColor: '#fff',
    marginBottom: 0,
    width: '30%',
    borderWidth: 0,
    alignContent: 'flex-start',
    marginHorizontal: 0,
  },
  forgotText: {
    color: '#747474',
    textAlign: 'left',
    width: '100%',
    fontSize: 13,
    fontFamily: 'CircularStd-Book',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  loginBtn: {
    backgroundColor: '#f9943b',
    marginBottom: 0,
    width: '70%',
    borderRadius: 6
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    fontSize: 13,
    fontFamily: 'tanseek-ar-lt',
    textTransform: 'capitalize',
  },

  orCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 11,
    marginBottom: 8,
  },
  singleLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9ec',
    width: '38%',
  },
  orText: {
    color: '#757575',
    fontSize: 13,
    paddingRight: 10,
    paddingLeft: 10,
    fontFamily: 'tanseek-ar-lt',
  },

  topCont: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
  },

  accountText: {
    textAlign: 'center',
    paddingBottom: 5,
    fontFamily: 'tanseek-ar-lt',
    color: '#747474',
    fontSize: 13,
  },

});


export default (LoginScreen);
