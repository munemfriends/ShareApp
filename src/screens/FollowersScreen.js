import React, {Component} from "react";
import { View, StyleSheet,   Image, Dimensions} from "react-native";
import { Card, Body,  Thumbnail,Button, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import Fontisto from "react-native-vector-icons/Fontisto";
import * as Animatable from "react-native-animatable";
import {styles} from './influencersStyle';

const { width: screenWidth } = Dimensions.get('window')

function FollowersScreen ({navigation}) {

    return (
        <ScrollView>
            <View style={styles.containerView}>
            
                <Animatable.View style={styles.categoryStyle} delay={800} animation="fadeInLeft" iterationCount={1}>
                    <Thumbnail
                            style={styles.instaIcon}
                            source={require('../assets/sac-logo.png')}
                        />
                </Animatable.View>
                <Animatable.View style={styles.btnContainer}  delay={800} animation="fadeInLeft" iterationCount={1}>
                    <Button
                        medium 
                        block
                        square
                        style={styles.btnStyle}
                        onPress={()=> navigation.navigate('top_sharing_influencers')}
                    >
                        <Text style={styles.btnText}>My top Sharing influencers</Text>
                    </Button>
                    <Button
                        medium 
                        block
                        square
                        style={styles.btnStyle}
                        onPress={()=> navigation.navigate('top_sharing_of_moment')}
                    >
                        <Text style={styles.btnText}>Top Sharing influencers of the moment</Text>
                    </Button>
                </Animatable.View>
                
            </View> 
        </ScrollView>

    );
}




export default FollowersScreen;