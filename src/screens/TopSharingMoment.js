import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Text, Thumbnail, Input, Item, Label, CheckBox,DefaultInput,  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/FontAwesome';
import * as Animatable from "react-native-animatable";


function TopSharingMoment({route,navigation}) {
 
    
    return (
        <ScrollView>
            <View style={styles.containerView}>

                <View style={styles.smsCont}>
                    <Text style={styles.chooseStyle}>Top sharing influencers of the moment</Text>
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('profile_detail')}
                                    style={styles.graphCont}>
                    <Thumbnail large square
                                    style={styles.graphStyle}
                                    source={require('../assets/profile-graph.png')}/>
                </TouchableOpacity>
            </View>
        </ScrollView>
);

}




const styles = StyleSheet.create({
containerView:{
    alignItems: 'center', 
    backgroundColor:'#fff',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    height: hp('96%'), // 70% of height device screen
    width: wp('100%') 
},

smsCont:{
    alignSelf:'flex-start',
},
chooseStyle:{
    textAlign: 'left',
    fontFamily: 'Bahij_Tanseek_Pro-Bold',
    // fontWeight: 'bold',
    fontSize: 35,
    lineHeight: 40,
    marginTop: 30
},

graphCont:{
    width: '100%',
    height:'80%',
    marginTop: 14
},
graphStyle:{
    width: '100%',
    height:'80%',
    marginTop: 14
},

  });

  export default TopSharingMoment;