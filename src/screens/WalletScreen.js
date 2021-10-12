import React, {useState} from "react";
import { View, StyleSheet, Text,  Image, Dimensions} from "react-native";
import { Card, Body,  Thumbnail,Input, Item,CheckBox,Button, Label } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import Fontisto from "react-native-vector-icons/Fontisto";
import * as Animatable from "react-native-animatable";
import {styles} from './topSharingStyle';
import Modal from 'react-native-modal';


const { width: screenWidth } = Dimensions.get('window')

function MenuScreen ({navigation}) {

   

    return (
        <ScrollView>
            <Animatable.View style={styles.containerView} delay={800} animation="fadeInLeft" iterationCount={1}>
                <View >
                        <Thumbnail large
                                style={styles.instaIcon}
                                source={require('../assets/instagram.png')}
                            />
                </View>

                    <View style={styles.shareContainer}>
                        <Text style={styles.shareStyle}>12-07-21</Text>
                        <Button
                            medium
                            square
                            style={{...styles.loginBtn, width: '50%'}}>
                            <Text style={styles.loginText}>3545</Text>
                        </Button>
                        <Thumbnail small style={styles.logoStyle} source={require('../assets/logo-1.png')} />
                    </View>
                    <View style={styles.shareContainer}>
                        <Text style={styles.shareStyle}>12-07-21</Text>
                        <Button
                            medium
                            square
                            style={{...styles.loginBtn, width: '50%'}}>
                            <Text style={styles.loginText}>3545</Text>
                        </Button>
                        <Thumbnail small style={styles.logoStyle} source={require('../assets/dollar.png')} />
                    </View>
                    <Button
                        medium 
                        block
                        square
                        style={styles.followBtn}
                    >
                        <Text style={{...styles.loginText, width:'20%'}}>Buy</Text>
                        <Thumbnail small style={styles.buyLogo} source={require('../assets/logo-1.png')} />

                    </Button>
                    <Button
                        medium 
                        block
                        square
                        style={{...styles.followBtn, marginTop: 15}}
                    >
                        <Text style={{...styles.loginText, width:'20%'}}>Sell</Text>
                        <Thumbnail small style={styles.buyLogo} source={require('../assets/logo-1.png')} />
                    </Button>
                    <Button
                        medium 
                        block
                        square
                        style={{...styles.followBtn, marginTop: 15}}
                    >
                        <Text style={styles.loginText}>Transfer</Text>
                    </Button>
                    <Button
                        medium 
                        block
                        square
                        style={{...styles.followBtn, marginTop: 15}}
                    >
                        <Text style={styles.loginText}>Online Purchase</Text>
                    </Button>
            </Animatable.View>
        </ScrollView>

    );
}




export default MenuScreen;