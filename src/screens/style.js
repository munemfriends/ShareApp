import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    containerView: {
        backgroundColor: '#f2f2f2',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        height: hp('80%'), 
        width: wp('100%'),
    },
    bannerImg:{
        height: 200,
        width: 160
    }

    
      
});