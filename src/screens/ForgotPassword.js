import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Text, Thumbnail, Input, Item, Label, CheckBox,DefaultInput, Picker } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/FontAwesome';


function ForgotPassword({route,navigation}) {
    
    navigation.setOptions({
        headerShown: false
      });
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
                <View style={styles.letsContainer}>
                    <Text style={styles.letsStyle}>Forgot Password</Text>
                    <Text style={styles.welcomeBack}>Enter Email Address</Text>
                </View>
                <View>
                    {/* <Text style={styles.labelStyle}>Email</Text> */}
                    <Item fixedLabel style={styles.inputContainer}>
                        <Icon name='envelope-o' size={20} />
                        <Input placeholderTextColor='#747474' style={styles.inputStyle} placeholder="Email address..." />
                    </Item>
                </View>
                <View style={styles.btnContainer}>
                    <Button medium square
                        style={styles.loginBtn} 
                        onPress={() => navigation.navigate('user_verification_code')}>
                        <Text style={styles.loginText} >Send</Text>
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
    height: hp('96%'), // 70% of height device screen
    width: wp('100%') 
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
    paddingTop: 10,
    paddingBottom: 35
},
letsStyle:{
    textAlign: 'left',
    fontFamily: 'CircularStd-Bold',
    fontWeight: 'bold',
    fontSize: 14,
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
    alignSelf: 'baseline',
    borderRadius: 50
},

btnContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 10
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
    borderRadius: 6
},
loginText:{
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    fontSize: 15,
      fontFamily: 'CircularStd-Medium',
    textTransform: 'capitalize'
},
inputStyle:{
    color: '#000',
    justifyContent: 'space-between',
    paddingLeft: 15,
    fontSize: 15,
    borderColor: '#53607d',
    width: '100%',
    fontFamily: 'CircularStd-Medium',
    paddingTop: 10,
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
labelStyle:{
    fontSize: 15,
    marginBottom: 0,
    paddingLeft: 4,
    color: '#747474',
    fontFamily: 'CircularStd-Medium'
},

  });

  export default ForgotPassword;