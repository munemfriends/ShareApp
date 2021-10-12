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
        alignItems: 'center',

    },

    instaIcon:{
        marginVertical: 10,
    },
    chooseStyle:{
            color: '#000',
            fontFamily: 'tanseek-ar-lt',
            fontSize: 14,
            width: '100%',
            textTransform: 'capitalize'
        },
    
    socialIconCont:{
        alignSelf: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    socialStyle:{
        marginVertical: 10,
    },
    formCont:{
        paddingHorizontal: 12,
        marginTop: 10
    },
    inputContainer: {
        width: '80%',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderRadius: 6,
        marginBottom: 15,
        marginTop: 0,
        paddingHorizontal: 5
      },
    inputStyle: {
        color: '#000',
        fontSize: 13,
        borderColor: '#53607d',
        width: '100%',
        fontFamily: 'tanseek-ar-lt',
      },
    privacyStyle:{
        paddingLeft: 8,
        fontFamily: 'tanseek-ar-lt',
        fontSize: 15,
        width: '85%',
        marginBottom: 10
      },
    
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        marginVertical: 10,
      },
    loginBtn: {
        backgroundColor: '#f9943a',
        borderRadius: 6,
        width: '35%'
        },
    nickName:{
        color: '#1c1209',
        width: '100%',
        fontSize: 16,
        textTransform: 'capitalize',
        alignSelf:'flex-start',
        fontWeight: 'bold'
    },
    fullName:{
        color: '#757575',
        width: '100%',
        fontSize: 14,
        fontFamily: 'tanseek-ar-lt',
        textTransform: 'capitalize',
        alignSelf:'flex-start'
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        fontSize: 21,
        fontFamily: 'Bahij_Tanseek_Pro-Bold',
        textTransform: 'capitalize',
        },
    followersCont:{
      marginVertical: 5,
      justifyContent: 'flex-start',
      width: '100%',
      alignSelf:'flex-start',
      marginHorizontal: 10
    },
    logoStyle:{
        height: 40,
        width: 40,
    },
    userImg:{
        height: 50,
        width: 50,
    },
    amountCont:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    amountText:{
        fontFamily: 'tanseek-ar-lt',
        fontSize: 15,
        width: '62%',
        marginBottom: 5
    },
    shareText:{
        fontFamily: 'Bahij_Tanseek_Pro-Bold',
        fontSize: 20,
        width: '62%',
        marginBottom: 10,
        color: '#f9943a'
    },
    compStyle:{
        borderRadius: 2,
        borderWidth: 2,
        borderColor: '#f9943b',
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
        marginLeft: -10.5,
        marginRight: 6
    },
    sharCont:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    },
    followersText:{
        fontFamily: 'tanseek-ar-lt',
        fontSize: 14,
        marginBottom: 10,
        color: '#747474'
    },
    nameCont:{
        alignSelf:'flex-start',
        alignItems:'flex-start'
    },
    profileContainer:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'100%'
    },
    shareContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        marginVertical: 12,
        paddingHorizontal: 15
    },
    profileName:{
        alignSelf:'center',
        marginLeft: 10
    },
    shareStyle:{
        color: '#737373',
        fontSize: 14,
        alignSelf:'center',
        fontFamily: 'tanseek-ar-lt',
    },
    likeContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        alignSelf:'center'
    },
    likeStyle:{
        color: '#737373',
        fontSize: 14,
        fontFamily: 'tanseek-ar-lt',
        alignSelf: 'center'
    },
    heartStyle:{
        marginHorizontal: 10,
    },
    likeBtn: {
        backgroundColor: '#fff',
        borderRadius: 6,
        width: '33%',
        borderWidth: 1,
        borderColor:'#939393',
        marginLeft: -30,
        justifyContent:'center',
        marginTop: 15
        },
    likeText: {
        color: '#f9943a',
        textAlign: 'center',    
        fontSize: 21,
        fontFamily: 'Bahij_Tanseek_Pro-Bold',
        textTransform: 'capitalize',
        paddingLeft: 20 
        },
    likeCont:{
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        marginTop: 15
    },
    followBtn: {
        backgroundColor: '#f9943a',
        borderRadius: 6,
        justifyContent:'center',
        marginTop: 50,
        width: '94%',
        alignSelf: 'center'
        },
    buyLogo:{
        height: 30,
        width: 30
    }
});