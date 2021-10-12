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

function SocialProfile ({navigation}) {

   

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
                    <Text style={styles.chooseStyle}>No of Followers</Text>
                    <View style={styles.btnContainer}>
                        <Button
                            medium
                            square
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>30,000</Text>
                        </Button>
                    </View>
                </View>

                <View style={styles.followersCont}>
                    <Text style={styles.chooseStyle}>My wallet balance</Text>
                    <View style={styles.btnContainer}>
                        <Button
                            medium
                            square
                            style={styles.loginBtn}>
                            <Text style={styles.loginText}>20,000</Text>
                        </Button>
                        <Thumbnail small style={styles.logoStyle} source={require('../assets/logo-1.png')} />
                    </View>
                </View>

                <View style={styles.followersCont}>
                    <Text style={styles.amountText}>Enter the amount you want to share with your followers</Text>
                    <View style={styles.amountCont}>
                        <Item fixedLabel style={styles.inputContainer}>
                            <Input
                                placeholderTextColor="#747474"
                                style={styles.inputStyle}
                                placeholder="Enter amount"
                            />
                        </Item>
                        <Thumbnail small style={styles.logoStyle} source={require('../assets/logo-1.png')} />
                    </View>
                </View>


                <View style={{...styles.followersCont, width: '50%'}}>
                    <Text style={styles.shareText}>Share with</Text>
                    <View style={styles.sharCont}>
                        <Text style={styles.followersText}>All Followers</Text>
                        <CheckBox checked={false}  style={styles.compStyle} />
                    </View>
                </View>

                <View style={{...styles.followersCont, width: '50%'}}>
                    <View style={styles.sharCont}>
                        <Text style={styles.followersText}>Active Followers</Text>
                        <CheckBox checked={false}  style={styles.compStyle} />
                    </View>
                </View>

                <View style={{...styles.followersCont, width: '50%'}}>
                    <View style={styles.sharCont}>
                        <Text style={styles.followersText}>New Followers</Text>
                        <CheckBox checked={false}  style={styles.compStyle} />
                    </View>
                </View>

                <View style={{...styles.btnContainer, justifyContent:'center',marginBottom: 10}}>
                    <Button
                        onPress={()=> navigation.navigate('share_review')}
                        medium
                        square
                        block
                        style={{...styles.loginBtn, width: '94%',alignSelf:'center'}}>
                        <Text style={styles.loginText}>Share</Text>
                    </Button>
                </View>

                


            </View>
        </ScrollView>

    );
}




export default SocialProfile;