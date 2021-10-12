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
            fontFamily: 'tanseek-modern-pro-arabic',
            fontSize: 30,
            paddingVertical: 10,
            textAlign: 'center',
            width: '100%',
        },
    modalHeader:{
        backgroundColor: '#fff',
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        },
    modalText: {
        textAlign: "center",
        color: '#000',
        fontFamily: 'tanseek-ar-lt',
        fontSize: 15,
        },
    modalBody:{
        paddingHorizontal: 12
        },
    socialText:{
        textAlign: "center",
        color: '#000',
        fontFamily: 'tanseek-modern-pro-arabic',
        fontSize: 18,
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
        width: '100%',
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
    compStyle:{
        borderRadius: 2,
        borderWidth: 2,
        borderColor: '#f9943b',
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
        marginLeft: -10.5,
        marginRight: 6
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10
      },
    loginBtn: {
        backgroundColor: '#f9943a',
        marginVertical: 5,
        borderRadius: 6
        },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        fontSize: 13,
        fontFamily: 'tanseek-ar-lt',
        textTransform: 'capitalize',
        },
      
});