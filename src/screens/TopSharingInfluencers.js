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

function TopSharingInfluencers ({navigation}) {

   

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
                    <View style={styles.btnContainer}>
                        <Thumbnail rounded medium style={styles.userImg} source={require('../assets/user.png')} />
                        <TouchableOpacity   onPress={()=> navigation.navigate('profile_detail')}
                                             style={styles.nameCont}>
                            <Text style={styles.nickName}>Cristiano</Text>
                            <Text style={styles.fullName}>Cristiano Ronaldo</Text>
                        </TouchableOpacity>
                        <Button
                            medium
                            square
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>3545</Text>
                        </Button>
                        <Thumbnail small style={styles.logoStyle} source={require('../assets/logo-1.png')} />
                    </View>
                </View>
                <View style={styles.followersCont}>
                    <View style={styles.btnContainer}>
                        <Thumbnail rounded medium style={styles.userImg} source={require('../assets/user.png')} />
                        <TouchableOpacity   onPress={()=> navigation.navigate('profile_detail')}
                                             style={styles.nameCont}>
                            <Text style={styles.nickName}>Cristiano</Text>
                            <Text style={styles.fullName}>Cristiano Ronaldo</Text>
                        </TouchableOpacity>
                        <Button
                            medium
                            square
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>3545</Text>
                        </Button>
                        <Thumbnail small style={styles.logoStyle} source={require('../assets/logo-1.png')} />
                    </View>
                </View>
                <View style={styles.followersCont}>
                    <View style={styles.btnContainer}>
                        <Thumbnail rounded medium style={styles.userImg} source={require('../assets/user.png')} />
                        <TouchableOpacity   onPress={()=> navigation.navigate('profile_detail')}
                                             style={styles.nameCont}>
                            <Text style={styles.nickName}>Cristiano</Text>
                            <Text style={styles.fullName}>Cristiano Ronaldo</Text>
                        </TouchableOpacity>
                        <Button
                            medium
                            square
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>3545</Text>
                        </Button>
                        <Thumbnail small style={styles.logoStyle} source={require('../assets/logo-1.png')} />
                    </View>
                </View>
                <View style={styles.followersCont}>
                    <View style={styles.btnContainer}>
                        <Thumbnail rounded medium style={styles.userImg} source={require('../assets/user.png')} />
                        <TouchableOpacity   onPress={()=> navigation.navigate('profile_detail')}
                                             style={styles.nameCont}>
                            <Text style={styles.nickName}>Cristiano</Text>
                            <Text style={styles.fullName}>Cristiano Ronaldo</Text>
                        </TouchableOpacity>
                        <Button
                            medium
                            square
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>3545</Text>
                        </Button>
                        <Thumbnail small style={styles.logoStyle} source={require('../assets/logo-1.png')} />
                    </View>
                </View>
                <View style={styles.followersCont}>
                    <View style={styles.btnContainer}>
                        <Thumbnail rounded medium style={styles.userImg} source={require('../assets/user.png')} />
                        <TouchableOpacity   onPress={()=> navigation.navigate('profile_detail')}
                                             style={styles.nameCont}>
                            <Text style={styles.nickName}>Cristiano</Text>
                            <Text style={styles.fullName}>Cristiano Ronaldo</Text>
                        </TouchableOpacity>
                        <Button
                            medium
                            square
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>3545</Text>
                        </Button>
                        <Thumbnail small style={styles.logoStyle} source={require('../assets/logo-1.png')} />
                    </View>
                </View>
            </View>
        </ScrollView>

    );
}




export default TopSharingInfluencers;