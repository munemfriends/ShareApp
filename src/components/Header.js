import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Thumbnail, View, Text, } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function NotificationHeader({navigation}){

    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <View style={styles.header}>
            <Icon name='list' onPress={openMenu}/>
            <View>
                <Text style={styles.header}>Notification</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row'

      }, 
      headingContainer:{
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#fff'
      },
    });