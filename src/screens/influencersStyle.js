import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    containerView: {
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        height: hp('85%'), 
        width: wp('100%'),
    },

    instaIcon:{
        color: '#fff',
        width: '40%'
    },
    categoryStyle:{
        marginTop: 25,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width: '97%'
      },
    
    btnContainer:{
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    btnStyle:{
        backgroundColor: '#f9943a',
        borderRadius: 6,
        marginVertical: 7

    },
    btnText:{
        color:'#fff',
        fontSize: 20,
        textTransform: 'capitalize',
        fontFamily: 'Bahij_Tanseek_Pro-Bold',
    }
      
});