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

function ProfileDetail ({navigation}) {

   

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
                    <View style={styles.profileContainer}>
                        <Thumbnail rounded large source={require('../assets/user.png')} />
                        <View style={styles.profileName}>
                            <Text style={styles.nickName}>Cristiano</Text>
                            <Text style={styles.fullName}>Cristiano Ronaldo</Text>
                        </View>
                    </View>
                </View>
                    <View style={styles.shareContainer}>
                        <Text style={styles.shareStyle}>Shared</Text>
                        <Button
                            medium
                            square
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>3545</Text>
                        </Button>
                        <Thumbnail small style={styles.logoStyle} source={require('../assets/logo-1.png')} />
                        <Text style={styles.shareStyle}>Since 20-07-21</Text>
                    </View>
                    <View style={styles.likeContainer}>
                        <Button
                            medium
                            square
                            style={styles.likeBtn}>
                            <Icon  name="heart" size={18} color="#f9943a"/>
                            <Text style={styles.likeText}>3545</Text>
                        </Button>
                        <View style={styles.likeCont}>
                            <Icon  name="heart" size={25} color="#f9943a" style={styles.heartStyle}/>
                            <Text style={styles.likeStyle}> Love</Text>
                        </View>
                    </View>
                    <Button
                        medium 
                        block
                        square
                        style={styles.followBtn}
                        onPress={()=> navigation.navigate('followers')}
                    >
                        <Text style={styles.loginText}>Follow</Text>
                    </Button>
                    <Button
                        medium 
                        block
                        square
                        style={{...styles.followBtn, marginTop: 15}}
                        onPress={()=> navigation.navigate('followers')}
                    >
                        <Text style={styles.loginText}>Unfollow</Text>
                    </Button>
            </View>
        </ScrollView>

    );
}




export default ProfileDetail;