import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Thumbnail, Input, Item, Label, CheckBox,DefaultInput } from 'native-base';


function UserVerification({route,navigation}) {
    
    
    return (
        <View style={styles.containerView}>
            <View>
                <Text style={styles.labelStyle}>User Verification</Text>
                <Text style={styles.verifyText}>To verify your registered number click verify to receive verification code</Text>
                <Item fixedLabel style={styles.inputContainer}>
                    <Input placeholderTextColor='#929294' style={styles.inputStyle} placeholder="+9203145879654"/>
                </Item>
            </View>
            <View>
                <Button medium
                    style={styles.verifyBtn} 
                    onPress={() => navigation.navigate('enter_verification_code')}>
                    <Text style={styles.loginText} >Verify</Text>
                </Button>
            </View>
        
        </View>
);

}




const styles = StyleSheet.create({
containerView:{
    flex: 1, 
    alignItems: 'center', 
    backgroundColor:'#fff',
    paddingLeft: 12,
    paddingRight: 12
    
},

logoView:{
    flexDirection: 'row',
},
thumnailStyle:{
    marginTop: 50,
    marginBottom: 30,
    width: '50%',
    height: 130,
    borderRadius: 2,
    alignSelf: 'baseline',
    
},
verifyBtn:{
    margin: 5,
    width: '100%',
    backgroundColor: '#1ca39c',
    borderRadius: 10,
    marginBottom: 0,
    marginTop: 280
    
},
loginText:{
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    fontSize: 17,
    fontFamily: 'ldfcomicsans',
    textTransform: 'capitalize'
},
inputStyle:{
    color: '#000',
    justifyContent: 'space-between',
    paddingLeft: 5,
    fontSize: 15,
    borderColor: '#53607d',
    width: '100%',
    fontFamily: 'ldfcomicsans',
    paddingTop: 10,
},
inputContainer:{
    width: '100%',
    margin: 5,
    backgroundColor: '#ebecf0',
    borderBottomWidth: 0,
    borderRadius: 6,
    paddingLeft: 10
},


labelStyle:{
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 0,
    paddingLeft: 0,
    marginTop: 80,
},
verifyText:{
    fontSize: 14,
    color: '#757575',
    marginBottom: 15
}
  });

  export default UserVerification;