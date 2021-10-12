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
import Feather from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';
import * as Animatable from "react-native-animatable";
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {loginAction} from '../redux/action/login.action';
const userInfo = {username: 'john@gmail.com', password: '123'};

function LoginScreen({login, navigation}) {
  //     navigation.setOptions({
  //         headerShown: false
  //       });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const [isSignupVisible, setSignupIsVisible] = useState(false);
  const [isSignupBorderActive, setSignupBorderActive] = useState(false);
  const [isLoginBorderActive, setLoginBorderActive] = useState(true);
  
  const _login = async () => {
    if (userInfo.username === username && userInfo.password === password) {
      await AsyncStorage.setItem('isLoggedIn', '1');
    
      login(true);

      // navigation.navigate('dashboard');
    } else {
      alert('Name or password is incorrect');
    }
  };
  const toggleFunction = () => {
    setIsVisible(!isVisible) 
  }
  const logintoggleFunction = () => {
    setSignupIsVisible(false)
    setLoginBorderActive(true)
    setSignupBorderActive(false)
}

const signuptoggleFunction = () => {
    setSignupIsVisible(true)
    setSignupBorderActive(true)
    setLoginBorderActive(false)
}

  return (
    <ScrollView>
      <Animatable.View style={styles.containerView} delay={800} animation="fadeInLeft" iterationCount={1}>

         
      <View  style={styles.topCont} animation="flipInX" iterationCount={1}>
          <Thumbnail
            large
            square
            style={styles.logoStyle}
            source={require('../assets/sac-logo.png')}
          />
        </View>

        <View style={styles.loginSignup}>
          <TouchableOpacity onPress={logintoggleFunction} style={styles.loginCont}>
            <Text style={{...styles.loginStyle,  borderBottomColor: isLoginBorderActive ? "#f9943a" : "#f2f2f2", borderBottomWidth: 0.8,paddingBottom: 10}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={signuptoggleFunction} style={styles.loginCont}>
            <Text style={{...styles.loginStyle,  borderBottomColor: isSignupBorderActive ? "#f9943a" : "#f2f2f2", borderBottomWidth: 0.8,paddingBottom: 10}}>Signup</Text>
          </TouchableOpacity>
        </View>

        {/* Login Code */}

      {isSignupVisible === false ?(
        <View style={{width: '100%',justifyContent:'center',alignItems:'center'}}>
        <View  animation="bounce" >
          <Item fixedLabel style={styles.inputContainer}>
            <Icon name="envelope-o" size={17} />
            <Input
              placeholderTextColor="#747474"
              style={styles.inputStyle}
              placeholder="Email address..."
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
            />
          </Item>
        </View>
        <View>
          <Item fixedLabel style={styles.inputContainer}>
            <Feather name="lock" size={22} />
            <Input
              placeholderTextColor="#747474"
              style={styles.passinputStyle}
              placeholder="Enter Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
            />
            
            <Icon size={23} name="eye-slash" color="#757575" />
          </Item>
        </View>

        <View style={styles.forgotContainer} >
            <View style={{flexDirection: 'row',width: '40%'}}>
            {isVisible ?(
                        <CheckBox checked={false} onPress={toggleFunction} style={styles.compStyle} />
                        ):
                          // <CheckBox onPress={toggleFunction} style={styles.indStyle} />
                          <Icon onPress={toggleFunction} color="#f9943b" name='check-square' size={19}  />
                          }
              <Text style={styles.privacyStyle}>Remember</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('forgot_password')}
              style={styles.accContainer}>
              <Text style={styles.accountText}>
                Forgot password?
              </Text>
            </TouchableOpacity>

        </View>

        
        <View style={styles.btnContainer}>
          <Button
            medium
            rounded
            onPress={() => {
              _login();}}
            style={styles.loginBtn}>
            <Text style={styles.loginText}>Sign In</Text>
          </Button>
        </View>

        <View style={styles.orCont}>
          <View style={styles.singleLine} />
          <Text style={styles.orText}>or login with your</Text>
          <View style={styles.singleLine} />
        </View>

        <View style={styles.bottomBtnContainer}>
            <Button medium square style={styles.facebookBtn}>
              <FontAwesome5Brands
                name="facebook-f"
                size={25}
                style={styles.facebookIcon}
              />
            </Button>
            <Button medium square style={styles.facebookBtn}>
              <Icon name="google-plus" size={22} style={styles.facebookIcon} />
            </Button>
            <Button medium square style={styles.facebookBtn}>
              <Icon name="apple" size={22} style={styles.facebookIcon} />
            </Button>
          </View>

        <View style={styles.orContainer} >
              <Text style={styles.orText}>
                or
              </Text>
        </View>

        <View style={styles.btnContainer} >
          <Button
            medium
            rounded
            style={{...styles.loginBtn, backgroundColor: '#fff',borderWidth: 1,borderColor: '#ccc'}}>
            <Text style={{...styles.loginText, color: '#f9943b'}}>Continue as Guest</Text>
          </Button>
        </View>
        </View>

):
<View style={{width: '100%',justifyContent:'center',alignItems:'center'}}>
        <View style={styles.multiContainer}>
                <View style={{width: '50%'}}>
                    <Item fixedLabel style={styles.inputContainer}>
                        <Icon name='user-o' size={16}  />
                        <Input placeholderTextColor='#747474' style={styles.inputStyle} placeholder="First Name" />
                    </Item>
                </View>

                <View style={{width: '54%'}}>
                    <Item fixedLabel style={styles.inputContainer}>
                        <Icon name='user-o' size={16}  />
                        <Input placeholderTextColor='#747474' style={styles.inputStyle} placeholder="Last Name" />
                    </Item>
                </View>
            </View>

            <View style={styles.multiContainer}>
                <View style={{width: '50%'}}>
                    <Item fixedLabel style={styles.inputContainer}>
                        <Icon name='users' size={16}  />
                        <Input placeholderTextColor='#747474' style={styles.inputStyle} placeholder="Family Name" />
                    </Item>
                </View>

                <View style={{width: '54%'}}>
                    <Item fixedLabel style={styles.inputContainer}>
                        <Icon name='calendar' size={16}  />
                        <Input placeholderTextColor='#747474' style={styles.inputStyle} placeholder="Date of birth" />
                    </Item>
                </View>
            </View>

            <View  >
                <Item fixedLabel style={styles.inputContainer}>
                    <Icon name='envelope-o' size={16}  />
                    <Input placeholderTextColor='#747474' style={styles.inputStyle} placeholder="Email address" />
                </Item>
            </View>

            <View  >
                <Item fixedLabel style={styles.inputContainer}>
                    <Icon name='phone' size={18}  />
                    <Input placeholderTextColor='#747474'  keyboardType='numeric'  style={styles.inputStyle} placeholder="Mobile number" />
                </Item>
            </View>

            <View  >
                <Item fixedLabel style={styles.inputContainer}>
                    <Icon name='lock' size={20}  />
                    <Input placeholderTextColor='#747474' style={styles.inputStyle} placeholder="Password" />
                    <Icon name='eye' size={16}  />
                </Item>
            </View>

            <View  >
                <Item fixedLabel style={styles.inputContainer}>
                    <Icon name='lock' size={20}  />
                    <Input placeholderTextColor='#747474' style={styles.inputStyle} placeholder="Confirm Password" />
                    <Icon name='eye' size={16}  />
                </Item>
            </View>

            <View style={{flexDirection: 'row'}}>
                    {isVisible ?(
                        <CheckBox checked={false} onPress={toggleFunction} style={styles.compStyle} />
                        ):
                          // <CheckBox onPress={toggleFunction} style={styles.indStyle} />
                          <Icon onPress={toggleFunction} color="#f9943b" name='check-square' size={19}  />
                          }
              <Text style={styles.privacyStyle}>Agree to <Text style={{...styles.privacyStyle, color:'#f9943b'}}>terms & conditions</Text></Text>
            </View>

            <View style={styles.btnContainer}>

                <Button medium rounded
                    style={{...styles.loginBtn, marginTop: 8}} 
                    onPress={() => navigation.navigate('user_verification_code')}>
                    <Text style={styles.loginText} >Signup</Text>
                </Button>
            </View>

            <View style={styles.orCont}>
              <View style={styles.singleLine} />
              <Text style={styles.orText}>or login with your</Text>
              <View style={styles.singleLine} />
            </View>

            <View style={styles.bottomBtnContainer}>
                <Button medium square style={styles.facebookBtn}>
                  <FontAwesome5Brands
                    name="facebook-f"
                    size={25}
                    style={styles.facebookIcon}
                  />
                </Button>
                <Button medium square style={styles.facebookBtn}>
                  <Icon name="google-plus" size={22} style={styles.facebookIcon} />
                </Button>
                <Button medium square style={styles.facebookBtn}>
                  <Icon name="apple" size={22} style={styles.facebookIcon} />
                </Button>
              </View>
              <View style={styles.skipCont}>
              <TouchableOpacity >
                <Text style={styles.skipStyle}>Skip for now</Text>
              </TouchableOpacity>
              </View>
      </View>
}

       

       
      </Animatable.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingVertical: 5,
    // height: hp('98%'), 
    // width: wp('100%'),
  },
  logoStyle: {
    borderRadius: 0,
    width: '50%',
    height: 100,
    marginTop: 50,
    marginBottom: 20
  },
  letsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingBottom: 20,
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
    width: '90%',
  },
  forgotBtn: {
    backgroundColor: '#fff',
    marginBottom: 0,
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
    backgroundColor: '#fff',
    margin: 0,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  loginText: {
    color: '#f9943a',
    textAlign: 'center',
    width: '100%',
    fontSize: 13,
    fontFamily: 'tanseek-ar-lt',
    textTransform: 'capitalize',
  },
  inputStyle: {
    color: '#000',
    justifyContent: 'space-between',
    paddingLeft: 15,
    fontSize: 13,
    borderColor: '#53607d',
    width: '100%',
    fontFamily: 'tanseek-ar-lt',
    paddingTop: 10,
  },
  passinputStyle: {
    color: '#000',
    justifyContent: 'space-between',
    paddingLeft: 15,
    fontSize: 13,
    borderColor: '#53607d',
    width: '100%',
    fontFamily: 'tanseek-ar-lt',
    paddingTop: 10,
  },
  inputContainer: {
    width: '90%',
    margin: 5,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 0,
  },

  forgotCont: {
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row-reverse',
  },
  labelStyle: {
    fontSize: 14,
    marginBottom: 5,
    paddingLeft: 4,
    color: '#747474',
    fontFamily: 'tanseek-ar-lt',
    fontWeight: 'normal',
  },
  fingerPrintBtn: {
    width: '90%',
    backgroundColor: '#f7f7f7',
    marginBottom: 0,
    borderWidth: 0,
    borderBottomWidth: 0,
    paddingRight: 30,
    paddingLeft: 25,
    elevation: 0,
  },
  fingerPrintText: {
    color: '#747474',
    textAlign: 'left',
    width: '100%',
    fontSize: 13,
    textTransform: 'capitalize',
    fontFamily: 'tanseek-ar-lt',
  },
  orCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 12,
  },
  singleLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#f9943a',
    width: '29%',
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
  },

  accountText: {
    fontFamily: 'tanseek-ar-lt',
    color: '#f9943a',
    fontSize: 13,
    textAlign:'right'
  },

  forgotText: {
    paddingBottom: 5,
    fontFamily: 'tanseek-ar-lt',
    color: '#747474',
    fontSize: 13,
  },
  
  lockStyle: {
    height: 20,
    width: 25,
    borderRadius: 0,
  },
  forgotContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginBottom: 18
  },
  orContainer:{
    marginVertical: 16
  },
  compStyle:{
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#f9943b',
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    marginLeft: -10.5,
    marginRight: 6
},
privacyStyle:{
  marginLeft: 10
},
indStyle:{
  borderRadius: 50,
  transform: [{ scaleX: 0.9 }, { scaleY: 0.9 }],
  borderColor: '#f9943b',
  borderWidth: 10,
  borderBottomWidth: 5,
  borderTopWidth: 5,
  borderLeftWidth: 5,
  borderRightWidth: 5,
  marginLeft: -10,
  marginRight: 6
},
loginSignup:{
  width: '90%',
  flexDirection: 'row',
  justifyContent:'flex-start',
  borderBottomColor: '#ccc',
  borderBottomWidth: 0.8,
  paddingBottom: 8,
  marginBottom: 20
},
loginStyle:{
  color:'#747474',
  fontSize: 15,
  paddingRight: 10,
  marginBottom: -8
},
multiContainer:{
  flexDirection: 'row',
  justifyContent:'space-between',
  alignItems: 'center',
  width:'91%',
  alignSelf: 'center'
},
privacyStyle:{
  paddingLeft: 8,
  fontFamily: 'CircularStd-Medium',
  fontSize: 15,
  lineHeight: 22,
  width: '85%',
  marginBottom: 10
},
accContainer:{
  width: '50%',
  alignContent: 'flex-start'
},
facebookIcon: {
  alignItems: 'center',
  color: 'white',
  alignContent: 'flex-end',
},
facebookBtn: {
  backgroundColor: '#f9943a',
  justifyContent: 'center',
  width: '15%',
  borderRadius: 50,
  height: 50
},
bottomBtnContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '90%',
  alignSelf: 'center',
  alignContent: 'center',
},
skipCont:{
  width: '90%',
  justifyContent: 'center',
  marginBottom: 10,
  marginTop: 6,
},
skipStyle:{
  color:'#f9943a',
  textAlign: 'center',
  width:'100%'
}
});
const mapDispatchToProps = dispatch => ({
  login: isLogin => dispatch(loginAction(isLogin)),
});
export default connect(null, mapDispatchToProps)(LoginScreen);
