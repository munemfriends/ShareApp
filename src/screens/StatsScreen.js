import React, {useState} from "react";
import { View, StyleSheet, Text,  Image, Dimensions} from "react-native";
import { Card, Body,  Thumbnail,Input, Item,CheckBox,Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity, ScrollView, TouchableHighlight } from "react-native-gesture-handler";
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import Fontisto from "react-native-vector-icons/Fontisto";
import * as Animatable from "react-native-animatable";
import {styles} from './platformStyle';
import Modal from 'react-native-modal';


const { width: screenWidth } = Dimensions.get('window')

function StatsScreen ({navigation}) {

    const [isModalVisible, setModalVisible] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const toggleFunction = () => {
        setIsVisible(!isVisible) 
    }

    return (
        <ScrollView>
            <Modal transparent = {true}
                isVisible={isModalVisible}
                    style={{borderTopRightRadius: 20,borderTopLeftRadius: 20,marginLeft: 0,marginRight: 0}}
                    >
                <View style={{borderTopRightRadius: 20,borderTopLeftRadius: 20,width: '100%', height: '70%',top: '22%', alignSelf: 'center', justifyContent: 'flex-start', backgroundColor: '#fff', }}>
                            
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalText}>Instagram</Text>
                            <Icon name="times" color="#747474" style={{fontSize: 18,padding: 5}} 
                                            onPress = {toggleModal}
                                            />
                        </View>
                        
                        <View style={styles.modalBody}>
                            
                            <View style={styles.iconContainer}>
                                <View style={styles.socialIconCont}>
                                    <Thumbnail style={styles.socialStyle} medium source={require('../assets/instagram.png')} />
                                    <Text style={styles.socialText}>Login</Text>
                                </View>
                            </View>
                            <View  style={styles.formCont} >
                                <View>
                                    <Item fixedLabel style={styles.inputContainer}>
                                        <Input
                                            placeholderTextColor="#747474"
                                            style={styles.inputStyle}
                                            placeholder="Email address..."
                                            autoCapitalize="none"
                                        />
                                    </Item>
                                </View>
                                <View>
                                    <Item fixedLabel style={styles.inputContainer}>
                                        <Input
                                            placeholderTextColor="#747474"
                                            style={styles.inputStyle}
                                            placeholder="Enter Password"
                                        />
                                        
                                    </Item>
                                </View>
                                <View style={{flexDirection: 'row',width: '60%'}}>
                                    {isVisible ?(
                                                <CheckBox checked={false} onPress={toggleFunction} style={styles.compStyle} />
                                                ):
                                                // <CheckBox onPress={toggleFunction} style={styles.indStyle} />
                                                <Icon onPress={toggleFunction} color="#f9943b" name='check-square' size={19}  />
                                                }
                                    <Text style={styles.privacyStyle}>Remember me</Text>
                                </View>
                                <View style={styles.btnContainer}>
                                    <Button
                                        onPress={()=> navigation.navigate('stats_share_with')}
                                        medium
                                        square
                                        block
                                        style={styles.loginBtn}>
                                        <Text style={styles.loginText}>Sign In</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
            
            <View style={styles.containerView}>
                <Text style={styles.chooseStyle}>Choose your platform</Text>
                <Animatable.View delay={1000} animation="fadeInLeft" iterationCount={1}>
                    <TouchableOpacity onPress = {toggleModal}>
                        <Thumbnail large
                                style={styles.instaIcon}
                                source={require('../assets/instagram.png')}
                            />
                    </TouchableOpacity>
                </Animatable.View>
            

                <Animatable.View delay={1100} animation="fadeInDown" iterationCount={1}>
                    <TouchableOpacity onPress = {toggleModal}>
                        <Thumbnail large
                                style={styles.instaIcon}
                                source={require('../assets/snapchat.png')}
                            />
                    </TouchableOpacity>
                </Animatable.View>

                <Animatable.View delay={1200} animation="fadeInDown" iterationCount={1}>
                    <TouchableOpacity onPress = {toggleModal}>
                        <Thumbnail large
                            style={styles.instaIcon}
                            source={require('../assets/youtube.png')}
                        />
                    </TouchableOpacity>
                </Animatable.View>

                <Animatable.View delay={1200} animation="fadeInDown" iterationCount={1}>
                    <TouchableOpacity onPress = {toggleModal}>
                        <Thumbnail large
                            style={styles.instaIcon}
                            source={require('../assets/tik-tok.png')}
                        />
                    </TouchableOpacity>
                </Animatable.View>

                <Animatable.View delay={1200} animation="fadeInDown" iterationCount={1}>
                    <TouchableOpacity onPress = {toggleModal}>
                        <Thumbnail large
                            style={styles.instaIcon}
                            source={require('../assets/facebook.png')}
                        />
                    </TouchableOpacity>
                </Animatable.View>


            </View>
        </ScrollView>

    );
}




export default StatsScreen;