import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Text, Thumbnail, Input, Item,Textarea, Label, CheckBox,DefaultInput, Picker, Radio } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';


function EditProfile({route,navigation}) {
    navigation.setOptions({
        headerShown: false
      });

    return (
      <ScrollView>
        <View style={styles.containerView}>
            
            <View style={styles.headerStyle} >
                <Feather onPress={() => navigation.navigate('my_profile')}
                name='angle-left'
                size={27}
                color='#747474' />
                <Text style={styles.addNewStyle}>Edit Profile</Text>
                <Button small rounded
                            style={styles.plusBtn}
                            onPress={ ()=> navigation.navigate('my_profile')}
                        >
                        <Text style={styles.addText}> Save</Text>
                    </Button>
            </View>
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.tabCont}>
                    <Thumbnail large square style={{backgroundColor:'#fff'}} source={require('../assets/user-upload.png')} />
                </TouchableOpacity>

                
            </View>

            <View>
                <Text style={styles.labelStyle}>Name</Text>
                <Item fixedLabel style={styles.inputContainer}>
                    <Input placeholderTextColor='#747474' value={'John Doe'} style={styles.inputStyle} placeholder="Enter name..." />
                </Item>
            </View> 

            <View>
                <Text style={styles.labelStyle}>Email</Text>
                <Item fixedLabel style={styles.inputContainer}>
                    <Input placeholderTextColor='#747474' value={'John@gmail.com'} style={styles.inputStyle} placeholder="Enter email..." />
                </Item>
            </View> 

            <View>
                <Text style={styles.labelStyle}>Phone</Text>
                <Item fixedLabel style={styles.inputContainer}>
                    <Input placeholderTextColor='#747474' value={'+92369874621'} style={styles.inputStyle} placeholder="Enter phone..." />
                </Item>
            </View> 

            <View style={{width:'90%',marginBottom: 10,}}>
                <Text style={styles.sallabel}>Language</Text>
                <DropDownPicker
                        items={[
                            {label: 'Select language', value: 'slan',},
                            {label: 'English', value: 'eng',  selected: true, },
                            
                        ]}
                        containerStyle={{height: 45,marginBottom: 0}}
                        style={{backgroundColor: '#fff',borderWidth: 1,borderColor: '#cdcdcd',borderBottomWidth: 1,borderBottomColor:'#cdcdcd'}}
                        itemStyle={{
                            justifyContent: 'flex-start',
                        }}
                        dropDownStyle={{backgroundColor: '#ffff',}}
                        labelStyle={{
                            fontSize: 14,
                            color: '#747474',
                            fontFamily: 'CircularStd-Medium'
                        }}
                        arrowColor="#747474"
                        arrowSize={19}
                    />
            </View>

            <View style={{width:'90%',marginBottom: 10,}}>
                <Text style={styles.sallabel}>Location</Text>
                <DropDownPicker
                        items={[
                            {label: 'Select location', value: 'sloc', selected: true,},
                            
                        ]}
                        containerStyle={{height: 45,marginBottom: 0}}
                        style={{backgroundColor: '#fff',borderWidth: 1,borderColor: '#cdcdcd',borderBottomWidth: 1,borderBottomColor:'#cdcdcd'}}
                        itemStyle={{
                            justifyContent: 'flex-start',
                        }}
                        dropDownStyle={{backgroundColor: '#ffff',}}
                        labelStyle={{
                            fontSize: 14,
                            color: '#747474',
                            fontFamily: 'CircularStd-Medium'
                        }}
                        arrowColor="#747474"
                        arrowSize={19}
                    />
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
    paddingBottom: 20,
    // height: hp('87%'), 
    // width: wp('100%'),
},
headerStyle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
    width: '100%',
    marginVertical: 20,
    paddingHorizontal: 15
},  
plusBtn:{
    backgroundColor: '#c60602',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
},
plusIcon:{
    fontSize: 11,
    color: '#fff',
},
addText:{
    fontFamily: 'CircularStd-Medium',
    fontSize: 11,
    textTransform: 'capitalize'
},
addNewStyle:{
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'CircularStd-Bold',
    fontSize: 15
},
topContainer:{
    width:'100%',
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
    flexDirection: 'row',
    alignItems:"center",
    justifyContent:'space-between',
    paddingHorizontal: 15,
    paddingBottom: 15,
    marginBottom: 10
},
btnContainer:{
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 3,
    paddingRight: 6,
    width: '92%',
    marginBottom: 10,
    marginTop: 35
},

loginBtn:{
    backgroundColor: '#c70602',
    marginBottom: 0,
    marginTop: 5
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
    paddingLeft: 10,
    fontSize: 13,
    borderColor: '#cdcdcd',
    width: '100%',
    fontFamily: 'CircularStd-Medium',
    padding: 0,
    height: 45
},
inputContainer:{
    width: '90%',
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderTopWidth: 1,
    borderTopColor: '#cdcdcd',
    borderLeftWidth: 1,
    borderLeftColor: '#cdcdcd',
    borderRightWidth: 1,
    borderRightColor: '#cdcdcd',
    borderBottomColor:'#cdcdcd',
    borderBottomWidth:1,
    borderRadius: 6,
    paddingLeft: 3,
    marginBottom: 10,
    paddingRight: 5,
    marginTop: 0,
},

sallabel:{
    fontSize: 15,
    marginBottom: 7,
    paddingLeft: 3,
    color: '#000',
    fontFamily: 'CircularStd-Medium',
    fontWeight: 'normal'
},
labelStyle:{
    fontSize: 14,
    marginBottom: 4,
    paddingLeft: 3,
    color: '#000',
    fontFamily: 'CircularStd-Medium',
    fontWeight: 'normal'
},
flagIcon:{
    height: 12,
    width: 30
},
tabCont:{
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor:'#fff'
},
tabText:{
    fontSize: 13,
    paddingLeft: 3,
    color: '#252525',
    fontFamily: 'CircularStd-Medium',
},
paypalIcon:{
    height: 20,
    width: 20
},
debitIcon:{
    height: 16,
    width: 40,
    marginRight: 7
},
safeText:{
    fontSize: 14,
    paddingLeft: 8,
    color: '#7e7e7e',
    fontFamily: 'CircularStd-Medium',
    width: '93%',
    lineHeight: 20,
    paddingBottom: 10
},
safeIcon:{
    height: 30,
    width: 30,
    marginRight: 7
},
});

  export default EditProfile;