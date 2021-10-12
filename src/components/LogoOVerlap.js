import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Dimensions,Modal  } from 'react-native'
import { Thumbnail, View, Text, Button,Input,Item } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

export default class LogoOverlap extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
render() {
    const { modalVisible } = this.state;
    
    var {navigate} = this.props.navigation;
        return (
            <View style={styles.headerContainer}>
              <LinearGradient
                    colors={['#ff3e00', '#ff8c01', '#f7a13e' ]}
                    style={styles.linearGradient}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y:0 }}
                >
                <View>
                  {/* <Text style={styles.userName}>Hello, Jordan!</Text>*/}
                  {/* <Text style={styles.lastLogin}>Your last login was 05.04.21 11:55:00</Text>  */}
                  <Thumbnail style={{height: 55}}  medium rounded source={require('../assets/logo-1.png')} />

                </View>
                <View>
                  <Thumbnail style={{height: 55}}  medium rounded source={require('../assets/user.png')} />
                </View>
              </LinearGradient>
            </View>

            
        )
    }
}


const styles = StyleSheet.create({
  headerContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#d9dad9',
    borderBottomWidth: 1,
  },
  userName:{
    fontSize: 18,
    fontFamily: 'CircularStd-Bold',
    paddingBottom: 5
  },
  lastLogin:{
    fontSize: 13,
    fontFamily: 'CircularStd-Book',
    color: '#747474'
  },
  linearGradient:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingVertical: 5,
    paddingHorizontal:8
},
  });