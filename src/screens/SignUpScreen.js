import React,{useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Text, Thumbnail, Input, Item, Label, CheckBox,DefaultInput, Picker, Radio } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/FontAwesome';
import * as Animatable from "react-native-animatable";


function SignUpScreen({route,navigation}) {
    navigation.setOptions({
        headerShown: false
      });

      const[isVisible, setIsVisible] = useState(false);
      
      const toggleFunction = () => {
          setIsVisible(!isVisible)
      }
    return (
      <ScrollView>
        <View style={styles.containerView}>
                <View style={styles.headerStyle} >
                    <Feather onPress={() => navigation.navigate('login')}
                    name='angle-left'
                    size={30}
                    color='#747474' />
                    {/* <Text style={styles.addNewStyle}>Steps: 4/5</Text> */}
                </View>
            <View  style={styles.topCont} animation="flipInX" iterationCount={1}>
                <Thumbnail
                    large
                    square
                    style={styles.logoStyle}
                    source={require('../assets/sac-logo.png')}
                />
            </View>
            
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
              <Text style={styles.privacyStyle}>I have read, understood and agree to <Text style={{...styles.privacyStyle, color:'#f9943b'}}>Privacy Policy</Text></Text>
            </View>

            <View style={styles.btnContainer}>

                <Button medium square
                    style={styles.loginBtn} 
                    onPress={() => navigation.navigate('user_verification_code')}>
                    <Text style={styles.loginText} >Signup</Text>
                </Button>
            </View>

        </View>
      </ScrollView>
);

}




const styles = StyleSheet.create({
containerView:{
    flex: 1, 
    alignItems: 'center', 
    backgroundColor:'#fff',
    paddingTop: 10,
    paddingBottom: 0,
    justifyContent: 'center'
    // height: hp('83%'), // 70% of height device screen
    // width: wp('100%'),
},
headerStyle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10
},  
addNewStyle:{
    fontFamily: 'CircularStd-Medium',
    fontSize: 14,
    color: '#747474'
},
letsContainer:{
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingTop: 0,
    paddingBottom: 15
},

letsStyle:{
    textAlign: 'left',
    fontFamily: 'CircularStd-Bold',
    // fontWeight: 'bold',
    fontSize: 17,
    paddingBottom: 5
},
welcomeBack:{
    textAlign: 'left',
    color: '#747474',
    fontFamily: 'CircularStd-Medium',
    fontSize: 13
},
logoView:{
    flexDirection: 'row',
},
thumnailStyle:{
    marginTop: 20,
    marginBottom: 14,
    width: '27%',
    height: 95,
    borderRadius: 2,
    alignSelf: 'baseline',
    borderRadius: 50
},

btnContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '90%',
    marginTop: 0,
    marginBottom: 10
},
forgotBtn:{
    margin: 5,
    backgroundColor: '#fff',
    marginBottom: 0,
    width: '30%',
    borderWidth: 0,
    alignContent: 'flex-start'
},
forgotText:{
    fontWeight: 'bold',
    color: '#747474',
    textAlign: 'left',
    width: '100%',
    fontSize: 18,
      fontFamily: 'CircularStd-Medium',
    textTransform: 'capitalize'
},
loginBtn:{
    backgroundColor: '#f9943b',
    marginBottom: 0,
    width: '100%',
    marginTop: 5,
    borderRadius: 6
},
loginText:{
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    fontSize: 13,
    fontFamily: 'CircularStd-Medium',
    textTransform: 'capitalize'
},
inputStyle:{
    color: '#000',
    justifyContent: 'space-between',
    paddingLeft: 15,
    fontSize: 13,
    borderColor: '#53607d',
    width: '100%',
    fontFamily: 'CircularStd-Medium',
    padding: 0,
},
inputContainer:{
    width: '90%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth:1 ,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 0,
},

forgetPassword:{
    color: '#c70602',
    fontSize: 12,
    paddingRight: 15,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    fontWeight: 'bold',
    textAlign: 'right',
},
forgotCont:{
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row-reverse'
},
sallabel:{
    fontSize: 15,
    marginBottom: 0,
    paddingLeft: 4,
    color: '#747474',
    fontFamily: 'CircularStd-Medium',
    fontWeight: 'normal'
},
labelStyle:{
    fontSize: 14,
    marginBottom: 0,
    paddingLeft: 4,
    color: '#747474',
    fontFamily: 'CircularStd-Medium',
    fontWeight: 'normal'
},
fingerPrintBtn:{
    width: '90%',
    backgroundColor: '#f7f7f7',
    marginBottom: 0,
    borderWidth: 0,
    borderBottomWidth: 0,
    paddingRight: 30,
    paddingLeft: 25
},
fingerPrintText:{
    color: '#747474',
    textAlign: 'left',
    width: '100%',
    fontSize: 15,
    textTransform: 'capitalize',
    fontFamily: 'CircularStd-Medium',

},
orCont:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15
},
singleLine:{
    borderBottomWidth: 1,
    borderBottomColor: '#e9e9ec',
    width: '38%',
},
orText:{
    color: '#757575',
    fontSize: 15,
    paddingRight: 10,
    paddingLeft: 10
},


topCont:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
},
qrStyle:{
    height: 50,
    borderRadius: 12,
    width: '70%'
},
accountText:{
    textAlign: 'center',
    paddingBottom: 6,
    fontFamily: 'CircularStd-Medium',
    color: '#747474'
},
accContainer:{
    marginTop: 50,
    borderBottomColor: '#e9e9ec',
    borderBottomWidth: 1,
    width: '90%'
},
bottomBtnContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '96%',
    marginTop: 10,
    alignSelf: 'center',
    alignContent: 'center'
},
facebookBtn:{
    margin: 5,
    backgroundColor: '#1877f2',
    marginBottom: 0,
    width: '45%',
    justifyContent: 'center'
},
facebookText:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'CircularStd-Medium',
    textTransform: 'capitalize'
},
googleBtn:{
    margin: 5,
    backgroundColor: '#f14336',
    marginBottom: 0,
    width: '45%',
    justifyContent: 'center'

},
facebookIcon:{
    alignItems: 'center',
    color: 'white',
    alignContent: 'center'
},
fingerPrintImg:{
    height: 45,
    width: 45
},
radioBtnContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '90%',
   
},
privacyStyle:{
    paddingLeft: 8,
    fontFamily: 'CircularStd-Medium',
    fontSize: 15,
    lineHeight: 22,
    width: '85%'
},
userIcon:{
    height: 20,
    width: 20
},
flagIcon:{
    height: 17,
    width: 17,
    borderRadius: 0
},
multiContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width:'91%',
    alignSelf: 'center'
},
compStyle:{
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#f9943b',
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    marginLeft: -10.5,
    marginRight: 6
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
  });

  export default SignUpScreen;