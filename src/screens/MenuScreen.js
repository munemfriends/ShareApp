import React,{useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, TouchableOpacity,} from 'react-native';
import {Button, Text, Thumbnail, Input, Item, Label, CheckBox,DefaultInput, Picker,Switch } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {connect} from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';
import { logout } from '../redux/action/user'
import Modal from 'react-native-modal';
import * as Animatable from "react-native-animatable";
import {loginAction} from '../redux/action/login.action';
import {styles} from './MenuStyle';
function MenuScreen({route,navigation,login}) {
    
    navigation.setOptions({
        headerShown: true
      });

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
    setModalVisible(!isModalVisible);
    };
    return (
        <ScrollView>
            {/* <Modal transparent = {true}
                isVisible={isModalVisible}
                    style={{borderTopRightRadius: 20,borderTopLeftRadius: 20,marginLeft: 0,marginRight: 0}}
                    >
                    <View style={{borderTopRightRadius: 20,borderTopLeftRadius: 20,width: '100%', height: '50%',top: '35%', alignSelf: 'center', justifyContent: 'flex-start', backgroundColor: '#fff', }}>
                                
                        <View style={styles.modalView}>
                            <Thumbnail style={styles.miniIcon} small square source={require('../assets/minus-icon.png')} />

                            <View style={styles.modalHeader}>
                                <Text style={styles.modalText}>Invite / Share</Text>
                                <Icon name="times" color="#f9943a" style={{fontSize: 18,padding: 5}} 
                                                onPress = {toggleModal}
                                                />
                            </View>
                            
                            <View style={styles.modalBody}>
                                
                                <View style={styles.iconContainer}>
                                    <View style={styles.socialIconCont}>
                                        <Thumbnail style={styles.fbIcon} medium rounded source={require('../assets/fb.png')} />
                                        <Text style={styles.socialText}>Facebook</Text>
                                    </View>

                                    <View style={styles.socialIconCont}>
                                        <Thumbnail style={styles.fbIcon} medium rounded source={require('../assets/insta.png')} />
                                        <Text style={styles.socialText}>Instagram</Text>
                                    </View>

                                    <View style={styles.socialIconCont}>
                                        <Thumbnail style={styles.fbIcon} medium rounded source={require('../assets/tiktok.png')} />
                                        <Text style={styles.socialText}>TikTok</Text>
                                    </View>
                                    
                                    <View style={styles.socialIconCont}>
                                        <Thumbnail style={styles.fbIcon} medium rounded source={require('../assets/twitter.png')} />
                                        <Text style={styles.socialText}>Twitter</Text>
                                    </View>
                                    
                                    <View style={styles.socialIconCont}>
                                        <Thumbnail style={styles.fbIcon} medium rounded source={require('../assets/snapchat.png')} />
                                        <Text style={styles.socialText}>Snapchat</Text>
                                    </View>

                                    <View style={styles.socialIconCont}>
                                        <Thumbnail style={styles.fbIcon} medium rounded source={require('../assets/linkedin.png')} />
                                        <Text style={styles.socialText}>LinkedIn</Text>
                                    </View>

                                    <View style={styles.socialIconCont}>
                                        <Thumbnail style={styles.fbIcon} medium rounded source={require('../assets/whatsapp.png')} />
                                        <Text style={styles.socialText}>WhatsApp</Text>
                                    </View>

                                    <View style={styles.socialIconCont}>
                                        <Thumbnail style={styles.fbIcon} medium rounded source={require('../assets/message.png')} />
                                        <Text style={styles.socialText}>Message</Text>
                                    </View>

                                    <View style={styles.socialIconCont}>
                                        <Thumbnail style={styles.fbIcon} medium rounded source={require('../assets/email.png')} />
                                        <Text style={styles.socialText}>Email</Text>
                                    </View>

                                    <View style={styles.socialIconCont}>
                                        <Thumbnail style={styles.fbIcon} medium rounded source={require('../assets/other.png')} />
                                        <Text style={styles.socialText}>Other</Text>
                                    </View>
                                </View>

                                <TouchableOpacity style={styles.copyLinkCont}>
                                    <Thumbnail style={styles.attachIcon} small source={require('../assets/attach.png')} />
                                    <Text style={styles.attacStyle}>Copy Link</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
             */}
            <Animatable.View style={styles.containerView} delay={800} animation="fadeInLeft" iterationCount={1}>
            
                <TouchableOpacity style={styles.listContainer}>
                    <View style={styles.leftContent}>
                        <Thumbnail style={styles.leftIcon} small square source={require('../assets/notification.png')} />
                        <Text style={styles.labelStyle}>Notification</Text>
                    </View>
                    <View style={styles.rightContent}> 
                        <Icon name='angle-right' color="#f9943a" size={25} />
                        {/* <Switch value={true}  color="#f9943a" style={styles.rightIcon}/> */}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listContainer}>
                    <View style={styles.leftContent}>
                        <Thumbnail style={styles.leftIcon} small square source={require('../assets/address.png')} />
                        <Text style={styles.labelStyle}>Address Book</Text>
                    </View>
                    <View style={styles.rightContent}> 
                        <Icon name='angle-right' color="#f9943a" style={styles.rightIcon} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listContainer}>
                    <View style={styles.leftContent}>
                        <Thumbnail style={styles.leftIcon} small square source={require('../assets/service.png')} />
                        <Text style={styles.labelStyle}>All Category</Text>
                    </View>
                    <View style={styles.rightContent}> 
                        <Icon name='angle-right' color="#f9943a" style={styles.rightIcon}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listContainer}>
                    <View style={styles.leftContent}>
                        <Thumbnail style={styles.leftIcon} small square source={require('../assets/payment.png')} />
                        <Text style={styles.labelStyle}>Chat</Text>
                    </View>
                    <View style={styles.rightContent}> 
                        <Icon name='angle-right' color="#f9943a" style={styles.rightIcon} />
                    </View>
                </TouchableOpacity>

                
                
                <TouchableOpacity style={styles.listContainer} >
                    <View style={styles.locationContent}>
                        <Thumbnail style={styles.leftIcon} small square source={require('../assets/location.png')} />
                        <Text style={styles.labelStyle}>Support Ticket</Text>
                    </View>
                    <View style={styles.locationRightContent}> 
                        <Icon name='angle-right' color="#f9943a" style={styles.rightIcon} />
                    </View>
                </TouchableOpacity> 

                <TouchableOpacity style={styles.listContainer}>
                    <View style={styles.leftContent}>
                        <Thumbnail style={styles.leftIcon} small square source={require('../assets/password.png')} />
                        <Text style={styles.labelStyle}>About Us</Text>
                    </View>
                    <View style={styles.rightContent}> 
                        <Icon name='angle-right' color="#f9943a" style={styles.rightIcon} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listContainer} onPress={toggleModal}>
                    <View style={styles.leftContent}>
                        <Thumbnail style={styles.leftIcon} small square source={require('../assets/share.png')} />
                        <Text style={styles.labelStyle}>Contact Us</Text>
                    </View>
                    <View style={styles.rightContent}> 
                        <Icon name='angle-right' color="#f9943a" style={styles.rightIcon} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.listContainer}>
                    <View style={styles.leftContent}>
                        <Thumbnail style={styles.leftIcon} small square source={require('../assets/help.png')} />
                        <Text style={styles.labelStyle}>Help & Support</Text>
                    </View>
                    <View style={styles.rightContent}> 
                        <Icon name='angle-right' color="#f9943a" style={styles.rightIcon} />
                    </View>
                </TouchableOpacity>


                
                <View style={styles.listContainer}>
                    <TouchableOpacity   style={styles.leftContent} onPress={()=>{login(null);}}>
                        <Thumbnail style={styles.leftIcon} small square source={require('../assets/signout.png')} />
                        <Text style={styles.labelStyle}>Sign Out</Text>
                    </TouchableOpacity>
                    <View style={styles.rightContent}> 
                        <Icon name='angle-right' color="#f9943a" style={styles.rightIcon} />
                    </View>
                </View>

            </Animatable.View>
        </ScrollView>
);

}






const mapDispatchToProps = dispatch => ({
    login: isLogin => dispatch(loginAction(isLogin)),
  });
  export default connect(null, mapDispatchToProps)(MenuScreen) ;