import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Text, Thumbnail, Input, Item, Label, CheckBox,DefaultInput,  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/FontAwesome';
import * as Animatable from "react-native-animatable";


function UserVerificationCode({route,navigation}) {
 
    
    return (
        <ScrollView>
            <View style={styles.containerView}>
                <Animatable.View delay={800} animation="fadeInLeft" iterationCount={1}>
                        <Thumbnail large
                                style={styles.instaIcon}
                                source={require('../assets/instagram.png')}
                            />
                </Animatable.View>

                <View style={styles.smsCont}>
                    <Text style={styles.chooseStyle}>Sms security code</Text>
                </View>



                <View>
                    <View style={styles.digitCont}>
                        <Text style={styles.digitStyle}>Enter Your 4 Digits</Text>
                        <Text style={styles.digitStyle}>Security Code received by SMS</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Item fixedLabel style={styles.inputContainer}>
                            <Input placeholder='-' keyboardType={"number-pad"} placeholderTextColor='#747474' style={styles.inputStyle}/>
                        </Item>
                        <Item fixedLabel style={styles.inputContainer}>
                            <Input placeholder='-' keyboardType={"number-pad"} placeholderTextColor='#747474' style={styles.inputStyle}/>
                        </Item>
                        <Item fixedLabel style={styles.inputContainer}>
                            <Input placeholder='-' keyboardType={"number-pad"} placeholderTextColor='#747474' style={styles.inputStyle}/>
                        </Item>
                        <Item fixedLabel style={styles.inputContainer}>
                            <Input placeholder='-' keyboardType={"number-pad"} placeholderTextColor='#747474' style={styles.inputStyle}/>
                        </Item>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity medium rounded
                        style={styles.forgotBtn}>
                        <Text style={styles.forgotText} >Resend (20)</Text>
                    </TouchableOpacity>
                    <Button medium square
                        style={styles.loginBtn} 
                        onPress={() => navigation.navigate('influencers')}>
                        <Text style={styles.loginText} >Confirm</Text>
                    </Button>
                </View>
            </View>
        </ScrollView>
);

}




const styles = StyleSheet.create({
containerView:{
    alignItems: 'center', 
    backgroundColor:'#fff',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    height: hp('96%'), // 70% of height device screen
    width: wp('100%') 
},

smsCont:{
    alignSelf:'flex-start',
    marginTop: 20,
    marginBottom: 10
},
chooseStyle:{
    textAlign: 'left',
    fontFamily: 'Bahij_Tanseek_Pro-Bold',
    // fontWeight: 'bold',
    fontSize: 35,
    paddingBottom: 5
},
digitCont:{
    marginBottom: 10
},
digitStyle:{
    fontFamily: 'tanseek-ar-lt',
    fontSize: 14,
},
btnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 40,
},

loginBtn:{
    backgroundColor: '#f9943a',
    marginBottom: 0,
    width: '45%',
    borderRadius: 6
},
loginText:{
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    fontSize: 15,
    fontFamily: 'tanseek-ar-lt',
    textTransform: 'capitalize'
},
inputStyle:{
    color: '#000',
    fontSize: 22,
    fontFamily: 'tanseek-ar-lt',
    paddingTop: 8,
    textAlign: 'center',
    paddingLeft: 0,
    width: '50%'
},
inputContainer:{
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '20%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomColor: '#e9e9ec',
    borderTopColor: '#e9e9ec',
    borderLeftColor: '#e9e9ec',
    borderRightColor: '#e9e9ec',
    paddingLeft: 0,
},

  });

  export default UserVerificationCode;