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

function DashboardScreen ({navigation}) {

    return (
        <ScrollView>
            <Animatable.View style={styles.containerView} delay={800} animation="fadeInLeft" iterationCount={1}>
            
                <View style={styles.categoryStyle}>
                    <Thumbnail
                            style={styles.instaIcon}
                            source={require('../assets/sac-logo.png')}
                        />
                </View>
                <View style={styles.btnContainer}>
                    <Button
                        medium 
                        block
                        square
                        style={styles.btnStyle}
                        onPress={()=> navigation.navigate('choose_your_platform')}
                    >
                        <Text style={styles.btnText}>Choose your Platform</Text>
                    </Button>
                    <Button
                        medium 
                        block
                        square
                        style={styles.btnStyle}
                        onPress={()=> navigation.navigate('statistics')}
                    >
                        <Text style={styles.btnText}>Statistics</Text>
                    </Button>
                </View>
                
            </Animatable.View> 
        </ScrollView>

    );
}




export default DashboardScreen;