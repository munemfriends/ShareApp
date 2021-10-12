import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Dimensions,Modal  } from 'react-native'
import { Thumbnail, View, Text, Button,Input,Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function MenuHeader({route,navigation}) {

        return (
            <View>
              <TouchableOpacity onPress={ ()=> navigation.navigate('my_profile')}  style={styles.headerContainer}>
                <View>
                  <Text style={styles.userName}>Hello, Jordan!</Text>
                  <Text style={styles.lastLogin}>View Profile</Text>
                </View>
                <View>
                  <Thumbnail style={{}}  medium rounded source={require('../assets/user.jpg')} />
                </View>
                </TouchableOpacity>
            </View>

            
        )
    }


const styles = StyleSheet.create({
  headerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderBottomColor: '#d9dad9',
    borderBottomWidth: 1
  },
  userName:{
    fontSize: 18,
    fontFamily: 'CircularStd-Bold',
    paddingBottom: 4
  },
  lastLogin:{
    fontSize: 13,
    fontFamily: 'CircularStd-Book',
    color: '#747474'
  },
  });

  export default MenuHeader;
