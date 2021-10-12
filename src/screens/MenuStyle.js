import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    containerView:{
        flex: 1, 
        alignItems: 'center', 
        paddingTop: 15,
        // height: hp('75%'),
        // width: wp('100%') 
    },
    listContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        borderBottomColor: '#e4e4e4',
        borderBottomWidth: 1,
        paddingBottom: 5,
        marginBottom: 7
    },
    leftIcon:{
        height: 35
    },
    locationIcon:{
        paddingVertical: 9,
        paddingHorizontal: 10,
        borderRadius: 10,
        color: '#666666',
        alignSelf: 'center',
        borderColor: '#cccccc',
        borderWidth: 2,
        textAlign: 'center',
        fontSize: 16,
        width: '29%'
    },
    leftContent:{
        width: '80%',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    labelStyle:{
        fontSize: 13,
        color: '#000',
        paddingLeft: 7,
        fontFamily: 'CircularStd-Bold',
    
    },
    locationStyle:{
        fontSize: 13,
        color: '#747474',
        fontFamily: 'CircularStd-Bold',
        textAlign: 'right',
        paddingRight: 8
    },
    locationRightContent:{
        flexDirection: 'row',
        alignContent: 'flex-end',
        alignItems: 'center',
    },
    locationContent:{
        width: '50%',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    rightIcon:{
        fontSize: 20
    },
    modalHeader:{
        backgroundColor: '#fff',
        width: '100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderBottomColor: '#c6c6c6',
        borderBottomWidth: 1,
        paddingVertical: 12,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        },
      modalText: {
        textAlign: "center",
        color: '#000',
        fontFamily: 'CircularStd-Bold',
        fontSize: 15,
      },
      modalBody:{
        paddingHorizontal: 12
      },
      miniIcon:{
        width: 22,
        height: 3,
        alignSelf: 'center',
        marginTop: 8 
        },
        socialIconCont:{
            alignSelf: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '20%',
            paddingTop: 12,
        },
        socialText:{
            textAlign: "center",
            color: '#000',
            fontFamily: 'CircularStd-Medium',
            fontSize: 12,
        },
        fbIcon:{
            width: 40,
            height: 40,
            borderRadius: 50
        },
        iconContainer:{
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
        },
        attacStyle:{
            fontSize: 13,
            fontFamily: 'CircularStd-Medium',
            color: '#000'
        },
        attachIcon:{
            height: 16,
            width: 16,
            borderRadius: 0,
            marginRight: 5
        },
        copyLinkCont:{
            flexDirection: 'row', 
            justifyContent: 'center',
            alignItems: 'center', 
            width:'95%',
            borderWidth: 1,
            borderColor: '#cdcdcd',
            borderRadius: 8, 
            padding: 15,
            alignSelf:'center',
            marginVertical: 10
        }
      });