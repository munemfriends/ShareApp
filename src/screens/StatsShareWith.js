import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Text, Thumbnail, Input, Item, Label, CheckBox,DefaultInput,  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/FontAwesome';
import * as Animatable from "react-native-animatable";


function UserVerificationCode({route,navigation}) {
 
    
    return (
        <ScrollView>
            <View style={styles.containerView}>

                <View style={styles.smsCont}>
                    <Text style={styles.chooseStyle}>Share with</Text>
                </View>
                <View style={styles.followersCont}>
                    <View style={styles.sharCont}>
                        <CheckBox checked={false}  style={styles.compStyle} />
                        <Text style={styles.followersText}>No of Followers</Text>
                    </View>
                </View>

                <View style={styles.followersCont}>
                    <View style={styles.sharCont}>
                        <CheckBox checked={false}  style={{...styles.compStyle, borderColor:'#fdd096',backgroundColor:'#fdd096'}} />
                        <Text style={styles.followersText}>New Followers from Share App Coins</Text>
                    </View>
                </View>
                <View style={styles.followersCont}>
                    <View style={styles.sharCont}>
                        <CheckBox checked={false}  style={{...styles.compStyle, borderColor:'#f99d91',backgroundColor:'#f99d91'}} />
                        <Text style={styles.followersText}>Unfollowers</Text>
                    </View>
                </View>
                <Thumbnail large square
                                style={styles.graphStyle}
                                source={require('../assets/stats-graph.png')}
                            />
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
},

compStyle:{
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#f9943b',
    backgroundColor: '#f9943b',
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    marginLeft: -10.5,
    marginRight: 6
},
followersCont:{
    marginVertical: 2,
    justifyContent: 'flex-start',
    width: '100%',
    alignItems:'flex-start'
  },
sharCont:{
    flexDirection: 'row',
    justifyContent:'flex-start',
    width: '80%',
},
followersText:{
    fontFamily: 'tanseek-ar-lt',
    fontSize: 14,
    marginBottom: 10,
    color: '#747474',
    marginLeft: 10
},
graphStyle:{
    width: '100%',
    height:'50%',
    marginTop: 14
},

  });

  export default UserVerificationCode;