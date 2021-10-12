import * as React from 'react';
import {StyleSheet, Linking} from 'react-native';
import {Text, View, Thumbnail} from 'native-base';
import DrawerAvatar from '../components/DrawerAvatar';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  import Animated from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CustomDrawerContent({ navigation, progress, ...rest }) {
    const translateX = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [-100, 0],
    });
  
    return (
      <DrawerContentScrollView {...rest} style={{marginTop: -4}}>
        <Animated.View style={{ transform: [{ translateX }] }}>
        <DrawerAvatar />
          {/* <DrawerItemList {...rest} /> */}
            {/* <DrawerItem label="Help" onPress={() => alert('Link to help')} /> */}
            <View style={styles.userDrawerContainer}>
              <TouchableOpacity style={styles.userDrawer}  onPress={()=>navigation.navigate('dashboard')}>
                <Icon name='history' style={styles.iconStyle}/>
                <Text style={styles.userDrawerItem}>About My Bahria</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.userDrawer}  onPress={()=>navigation.navigate('info_desk')}>
                <Icon name='info-circle' style={styles.iconStyle}/>
                <Text style={styles.userDrawerItem}>Bahria Info Desk</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.userDrawer}  onPress={()=>navigation.navigate('blogs')}>
                <FontAwesome5 name='blog' style={styles.iconStyle}/>
                <Text style={styles.userDrawerItem}>Blog</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.userDrawer}  onPress={()=>navigation.navigate('news')}>
                <Icon name='newspaper-o' style={styles.iconStyle}/>
                <Text style={styles.userDrawerItem}>News</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity style={styles.userDrawer}  onPress={()=>navigation.navigate('notification')}>
                <Icon name='commenting-o' style={styles.iconStyle}/>
                <Text style={styles.userDrawerItem}>Forum</Text>
              </TouchableOpacity> */}

              <TouchableOpacity style={styles.userDrawer}  onPress={()=>navigation.navigate('contact_us')}>
                <Icon name='phone-square' style={styles.iconStyle}/>
                <Text style={styles.userDrawerItem}>Contact</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.userDrawer}  onPress={()=>navigation.navigate('albums')}>
                <MaterialIcons name='perm-media' style={styles.iconStyle}/>
                <Text style={styles.userDrawerItem}>Gallery</Text>
              </TouchableOpacity>
               
            </View>

            <View style={styles.userDrawerContainer}>
              <Text style={styles.heading}>My Account</Text>
                <TouchableOpacity style={styles.userDrawer} onPress={()=>navigation.navigate('edit_profile')}>
                  <Icon name='pencil' style={styles.iconStyle}/>
                  <Text style={styles.userDrawerItem}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.userDrawer} onPress={()=>navigation.navigate('register_business')}>
                  <FontAwesome5 name='business-time' style={styles.iconStyle}/>
                  <Text style={styles.userDrawerItem}>Register Your Business</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.userDrawer} onPress={() => Linking.openURL('http://182.50.148.24/demo/bahria/managebuy_sell.php')}>
                  <FontAwesome5 name='hand-holding-usd' style={styles.iconStyle}/>
                  <Text style={styles.userDrawerItem}>Manage Sell / Purchase</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.userDrawerContainer}>
                <TouchableOpacity style={styles.userDrawer}>
                  <Icon name='power-off' style={styles.iconStyle}/>
                  <Text style={styles.userDrawerItem}>Log out</Text>
                </TouchableOpacity>
                {/* <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'center', marginTop: 30}}>
                  <TouchableOpacity style={styles.userDrawer}  onPress={()=>navigation.navigate('faq')}>
                    <Thumbnail style={styles.rightthumbnail} small square source={require('../assets/twitter.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.userDrawer}  onPress={()=>navigation.navigate('faq')}>
                    <Thumbnail style={styles.rightthumbnail} small square source={require('../assets/google.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.userDrawer}  onPress={()=>navigation.navigate('faq')}>
                    <Thumbnail style={styles.rightthumbnail} small square source={require('../assets/insta.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.userDrawer}  onPress={()=>navigation.navigate('faq')}>
                    <Thumbnail style={styles.rightthumbnail} small square source={require('../assets/facebook.png')} />
                  </TouchableOpacity>
                </View> */}
            </View>
        </Animated.View>
      </DrawerContentScrollView>

  
    );
  }


  const styles = StyleSheet.create({
    userDrawerContainer:{
      borderBottomColor: '#eeeeee',
      borderBottomWidth: 1,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 15
    },
    userDrawer:{
      flexDirection: 'row',
      paddingBottom: 5,
      paddingTop: 5
    },
    userDrawerItem:{
      color: '#333333',
      fontSize: 14,
      marginTop: -1,
      width: '90%'
    },
    iconStyle:{
      color: '#cc0000',
      fontSize: 18,
      marginRight: 15,
      width: '8%',
      alignSelf: 'center'
    },
    heading:{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5
    },
    rightthumbnail: {
      marginRight: 10
    }
  });