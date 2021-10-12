import React, {useState} from "react";
import { View, StyleSheet, Text,  Image, Dimensions} from "react-native";
import { Card, Body,  Thumbnail,Input, Item,CheckBox,Button, Label } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import Fontisto from "react-native-vector-icons/Fontisto";
import * as Animatable from "react-native-animatable";
import {styles} from './socialProfileStyle';
import Modal from 'react-native-modal';


const { width: screenWidth } = Dimensions.get('window')

function ShareReview ({navigation}) {

   

    return (
        <ScrollView>
            <View style={styles.containerView}>
                <Animatable.View delay={800} animation="fadeInLeft" iterationCount={1}>
                        <Thumbnail large
                                style={styles.instaIcon}
                                source={require('../assets/instagram.png')}
                            />
                </Animatable.View>

                <View style={styles.followersCont}>
                    <Text style={styles.chooseStyle}>Share Transaction Review</Text>
                    <View style={styles.btnContainer}>
                        <Button
                            medium
                            square
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>3444</Text>
                        </Button>
                        <Thumbnail small style={styles.logoStyle} source={require('../assets/logo-1.png')} />
                    </View>
                </View>

                <View style={styles.followersCont}>
                    <Text style={styles.chooseStyle}>To be share among your</Text>
                    <View style={styles.btnContainer}>
                        <Button
                            medium
                            square
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>20,000</Text>
                        </Button>
                        <Text style={{...styles.chooseStyle, marginLeft: 10}}>Active Followers</Text>
                    </View>
                </View>

                <View style={styles.followersCont}>
                    <Text style={styles.chooseStyle}>Each one will receive</Text>
                    <View style={styles.btnContainer}>
                        <Button
                            medium
                            square
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>3545</Text>
                        </Button>
                        <Thumbnail small style={styles.logoStyle} source={require('../assets/logo-1.png')} />
                    </View>
                </View>

                <View style={{...styles.btnContainer, justifyContent:'center',marginTop: 50}}>
                    <Button
                        onPress={()=> navigation.navigate('user_verification_code')}
                        medium
                        square
                        block
                        style={{...styles.loginBtn, width: '94%',alignSelf:'center'}}>
                        <Text style={styles.loginText}>Approved</Text>
                    </Button>
                </View>

            </View>
        </ScrollView>

    );
}




export default ShareReview;