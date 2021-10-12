import React, {Component} from "react";
import { View, StyleSheet, Text,  Image, Dimensions} from "react-native";

import { Card, Body,  Thumbnail, } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import Fontisto from "react-native-vector-icons/Fontisto";
import * as Animatable from "react-native-animatable";
import {styles} from './style';

const { width: screenWidth } = Dimensions.get('window');

function DashboardScreen ({navigation}) {

    return (
        <ScrollView>
            <View style={styles.containerView}>
                <Animatable.View style={styles.BannerContainer} delay={800} animation="fadeInLeft" iterationCount={1}>
                
                    <Thumbnail square
                                large
                                style={styles.bannerImg}
                                source={require('../assets/dashboard-logo.png')}
                            />
                    
                </Animatable.View>
            </View>
        </ScrollView>

    );
}



export default DashboardScreen;
