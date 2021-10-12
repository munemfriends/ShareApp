import React, {Component} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, TouchableOpacity,Dimensions, Modal} from 'react-native';
import {Button, Text, Input, Item,SwipeRow,Card,Body,Switch, Thumbnail,Footer,FooterTab } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
const { width: screenWidth } = Dimensions.get('window')


export default class ShippingSummary extends Component {
        
    render() {
        const { navigate } = this.props.navigation;
    return (
      <ScrollView>
          
        <View style={styles.containerView}>
        
        
        <View style={styles.headerStyle} >
                <Feather onPress={() => navigate('inventory')}
                name='angle-left'
                size={30}
                color='#747474'
                style={{paddingHorizontal: 5,marginLeft:-5}}
                />
                <Text style={styles.addNewStyle}>Summary</Text>
            </View>
            
            <View style={styles.formContainer}>
                <View style={{width:'49%',}}>
                    <Text style={styles.labelStyle}>Shipping From</Text>
                    <Item fixedLabel style={styles.inputContainer}>
                        <Input placeholderTextColor='#747474' style={styles.inputStyle} placeholder="Shipping from" />
                    </Item>
                </View>

                <View style={{width:'49%',}}>
                    <Text style={styles.labelStyle}>Shipping To</Text>
                    <Item fixedLabel style={styles.inputContainer}>
                        <Input placeholderTextColor='#747474' style={styles.inputStyle} placeholder="Shipping to" />
                    </Item>
                </View> 
            </View> 


            <View style={{width:'100%',borderBottomColor: '#e9e9ec',borderBottomWidth: .8,paddingBottom: 15,alignSelf: 'center'}}>
                <Text style={{...styles.sallabel, ...{paddingLeft: 20}}}>Desired Service</Text>
                <DropDownPicker
                        items={[
                            {label: 'Select Service', value: 'sservice',  selected: true, },
                            {label: 'Air Express', value: 'air', },
                            
                        ]}
                        containerStyle={{height: 45,marginBottom:0,zIndex: 100,width: '90%',alignSelf: 'center'}}
                        style={{backgroundColor: '#fff',borderWidth: 1,borderColor: '#cdcdcd',borderBottomWidth: 1,}}
                        itemStyle={{
                            justifyContent: 'flex-start',
                        }}
                        dropDownStyle={{backgroundColor: '#fff',}}
                        labelStyle={{
                            fontSize: 14,
                            color: '#747474',
                            fontFamily: 'CircularStd-Medium'
                        }}
                        arrowColor="#747474"
                        arrowSize={19}
                    />
            </View>

                <SwipeRow
                style={{marginLeft: 8,width:'97.5%',backgroundColor: 'transparent',borderBottomWidth: 0,elevation:0,flexDirection: 'row',alignSelf: 'center',justifyContent:'flex-start',alignItems:'flex-start',alignContent: 'flex-start'}}
                    leftOpenValue={10}
                    rightOpenValue={-90}
                    
                    body={
                        <Card style={{borderRadius: 4,alignSelf:'center',height: 103}}>
                            <Body style={styles.cardStyle}>
                                <View style={styles.commodityCont}>
                                    <Text style={styles.commodityStyle}>Commodity</Text>
                                    <Text style={styles.comText}>Bottled Beverages</Text>
                                </View>
                                <View style={styles.bottomContainer}>
                                    <View style={styles.weightCont}>
                                        <Text style={styles.weightStyle}>Weight (lbs)</Text>
                                        <Text style={styles.weightText}>45</Text>
                                    </View>
                                    <View style={styles.weightCont}>
                                        <Text style={styles.weightStyle}>Quantity</Text>
                                        <Text style={styles.weightText}>05</Text>
                                    </View>
                                    <View style={styles.weightCont}>
                                        <Text style={styles.weightStyle}>Dimensions (In)</Text>
                                        <Text style={styles.weightText}>45 x 13 x 15</Text>
                                    </View>
                                </View>
                            </Body>
                        </Card>
                    }
                    right={
                        <Button small transparent style={{borderRadius: 50,height: 40,}}>
                            <Icon style={{backgroundColor: "#F5EBEB",borderRadius: 50,fontSize: 20, paddingHorizontal: 10,paddingVertical: 7}} active color="#C70602" name="trash" />
                        </Button>
                        }
                />
            
            <View style={styles.btnContainer}>
                <View style={styles.hazrdousItem}>
                    <Switch value={true}  color="#747474" 
                            style={{ transform:[{ scaleX: .8 }, { scaleY: .8 }] }}/>
                    <Text style={styles.includeStyle}>Include Hazardous Items</Text>
                </View>
                <Button medium rounded
                    style={styles.loginBtn} 
                    onPress={() => navigate('get_quote')}>
                    <Text style={styles.loginText} >Get Quote</Text>
                </Button>
            </View>
            
           
      
        </View>
      </ScrollView>
);

}

}


const styles = StyleSheet.create({
containerView:{
    flex: 1, 
    alignItems: 'center', 
    backgroundColor:'#fff',
    paddingTop: 10,
    paddingBottom: 20,
    height: hp('87%'),
    width: wp('100%'),
},
headerStyle:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomWidth: .8,
    borderBottomColor: '#e9e9ec',
},  
addNewStyle:{
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'CircularStd-Bold',
    width: '90%',
    fontSize: 15
},
modalView: {
    borderTopRightRadius: 10,borderTopLeftRadius: 10,
    backgroundColor: "white",
    borderRadius: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 5
  },
  miniIcon:{
    width: 30,
    height: 5,
    alignSelf: 'center',
},
modalHeader:{
    backgroundColor: '#fff',
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 4,
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
    backgroundColor:'#fff',
    width:'100%'
},
formContainer:{
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingTop: 15
},
btnContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingLeft: 3,
    paddingRight: 6,
    width: '97%',
    marginBottom: 10,
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1, 
    paddingVertical: 10
},

loginBtn:{
    backgroundColor: '#c70602',
},
loginText:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 13,
    fontFamily: 'CircularStd-Medium',
    textTransform: 'capitalize'
},
inputStyle:{
    color: '#000',
    justifyContent: 'space-between',
    paddingLeft: 10,
    fontSize: 13,
    borderColor: '#cdcdcd',
    width: '100%',
    fontFamily: 'CircularStd-Medium',
    padding: 0,
    height: 45
},
inputContainer:{
    width: '100%',
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderTopWidth: 1,
    borderTopColor: '#cdcdcd',
    borderLeftWidth: 1,
    borderLeftColor: '#cdcdcd',
    borderRightWidth: 1,
    borderRightColor: '#cdcdcd',
    borderRadius: 6,
    paddingLeft: 3,
    marginBottom: 10,
    marginTop: 0,
},

sallabel:{
    fontSize: 13,
    marginBottom: 7,
    paddingLeft: 3,
    color: '#000',
    fontFamily: 'CircularStd-Medium',
    fontWeight: 'normal'
},
labelStyle:{
    fontSize: 14,
    marginBottom: 4,
    paddingLeft: 3,
    color: '#000',
    fontFamily: 'CircularStd-Medium',
    fontWeight: 'normal'
},
cardStyle:{
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 4,
    paddingVertical: 7,
    marginHorizontal: 12,
    marginBottom: 10,
},
tabBody:{
    backgroundColor: '#f7f7f7',
    elevation: 0,
    borderRadius: 20
},
commodityCont:{
    alignSelf: 'flex-start',
},
commodityStyle:{
    fontSize: 12,
    marginBottom: 4,
    color: '#747474',
    fontFamily: 'CircularStd-Book',
},
comText:{
    fontSize: 13,
    marginBottom: 4,
    color: '#000',
    fontFamily: 'CircularStd-Bold',
    width:'100%'
},
bottomContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#e9e9ec',
    paddingTop: 10,
    
},
weightCont:{
    width: '33%'
},
weightStyle:{
    fontSize: 13,
    marginBottom: 4,
    color: '#747474',
    fontFamily: 'CircularStd-Book',
},
weightText:{
    fontSize: 13,
    marginBottom: 4,
    color: '#000',
    fontFamily: 'CircularStd-Bold',
},
hazrdousItem:{
    flexDirection: 'row',
    justifyContent:'flex-start',
    alignItems: 'center'
},
includeStyle:{
    fontSize: 13,
    fontFamily: 'CircularStd-Book',
    color:"#747474"
},
  parcelText:{
    fontSize: 13,
    color: '#000',
    fontFamily: 'CircularStd-Bold',
  },
  itemStyle:{
    fontSize: 13,
    color: '#747474',
    fontFamily: 'CircularStd-Bold',
    textAlign: 'right',
    alignSelf: 'flex-end'
  },

weightStyle:{
    fontSize: 13,
    color: '#747474',
    fontFamily: 'CircularStd-Bold',
    alignSelf: 'flex-start',
    textAlign: 'center'
},
filterIcon:{
    height: 23,
    width: 20
},
summaryHead:{
    backgroundColor:'#c60602',
    paddingVertical: 12,
    alignItems:'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    marginVertical: 12
},
summaryText:{
    fontSize: 13,
    color: '#fff',
    fontFamily: 'CircularStd-Medium',
    alignSelf: 'center',
    textAlign: 'center',
    width: '100%'
},
cargoFrom:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    paddingBottom: 8
},
cargoStyle:{
    fontSize: 15,
    color: '#000',
    fontFamily: 'CircularStd-Medium',
    paddingBottom: 10
},
cargoLoc:{
    fontSize: 13,
    color: '#747474',
    fontFamily: 'CircularStd-Medium',
},
shipIcon:{
    height: 20,
    width: 25,
    marginRight: 12
},
cargoExpCont:{
    paddingHorizontal: 12,
    borderBottomColor: '#cdcdcd',
    borderBottomWidth: 1
},
carouselContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
},
carCont:{
    flexDirection: 'column',
    width: '90%',
},
sliderHeading: {
    color: '#000',
    fontSize: 15,
    textTransform: 'capitalize',
    fontFamily: 'CircularStd-Bold',
    alignSelf: 'flex-start',
    textAlign: 'left',
},
priceStyle:{
    color: '#747474',
    fontSize: 13,
    fontFamily: 'CircularStd-Bold',
    alignSelf: 'flex-start',
},
vinStyle:{
    fontSize:13,
    color: '#747474',
    fontFamily: 'CircularStd-Book',
    alignSelf:'flex-start',
    textAlign:'left'
},
vinNo:{
    fontSize:13,
    color: '#747474',
    fontFamily: 'CircularStd-Book',
    alignSelf:'flex-start',
    textAlign:'left'
},
InventoryContainer:{
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
},
shipmentIcon:{
    height: 27,
    width: 25,
    marginRight: 10
},
leftContainer:{
    width:'65%',
    borderRightWidth: 1,
    borderRightColor:'#f3f4f3'
},

shipCity:{
    fontSize:14,
    color: '#d90000',
    fontFamily: 'CircularStd-Bold',
    alignSelf:'flex-start',
    textAlign:'left',
    paddingBottom: 4
},
shipFrom:{
    fontSize:12,
    color: '#747474',
    fontFamily: 'CircularStd-Book',
    alignSelf:'flex-start',
    textAlign:'left',
    width: '80%',
    lineHeight: 15
},
carscardStyle:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 8,
    borderRadius: 8,
    width:'92%',
    alignSelf:'center',
    marginBottom: 10
},
rightContainer:{
    width:'35%',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    alignSelf: 'center',
    paddingHorizontal: 10,
},
ethIcon:{
    height: 30,
    width: 65,
    marginBottom: 12
},
ethStyle:{
    fontSize:11,
    color: '#000',
    fontFamily: 'CircularStd-Book',
    alignSelf:'center',
    textAlign:'center',
},
amountStyle:{
    fontSize:13,
    color: '#000',
    fontFamily: 'CircularStd-Medium',
    alignSelf:'center',
    textAlign:'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    borderTopColor:'#f0f0f0',
    paddingVertical: 8,
    width:'100%',
    marginVertical: 8
},
bookNowBtn:{
    backgroundColor:'#c60602',
    borderRadius: 4,
    marginTop: 30
},
bookNowStyle:{
    fontSize:11,
    color: '#fff',
    fontFamily: 'CircularStd-Medium',
    alignSelf:'center',
    textTransform: 'capitalize'
},
dateContainer:{
    width: '80%',
    marginVertical: 10
},
dateCont:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
etdDate:{
    color:'#747474',
    fontSize: 11,
    fontFamily: 'CircularStd-Book',
},
etdIcon:{
    width:'100%',
    height: 16
},
minusIcon:{
    width: 35,
    height: 4,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 10
},
dropDownContainer:{
    borderWidth: 1,
    borderColor: '#cdcdcd',
    borderTopWidth: 1,
    borderTopColor: '#cdcdcd',
    borderLeftWidth: 1,
    borderLeftColor: '#cdcdcd',
    borderRightWidth: 1,
    borderRightColor: '#cdcdcd',
    borderRadius: 6,
    marginHorizontal: 15,
},
dropBottomContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
},
filterbtnContainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 3,
    paddingRight: 6,
    marginBottom: 10,
    paddingTop: 8,
    
},
nextBtn:{
    backgroundColor: '#c70602',
    marginBottom: 0,
    marginLeft: 15,
    width:'75%',
},
nextStyle:{
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    fontSize: 13,
    fontFamily: 'CircularStd-Medium',
    textTransform: 'capitalize'
},
clearBtn:{
    backgroundColor:'#fff',
    elevation: 0,
    width: '20%'
},
clearStyle:{
    color: '#747474',
    textAlign: 'center',
    width: '100%',
    fontSize: 13,
    fontFamily: 'CircularStd-Medium',
    textTransform: 'capitalize'
},
labelText:{
    fontSize: 14,
    marginBottom: 4,
    paddingTop: 10,
    paddingLeft: 15,
    color: '#000',
    fontFamily: 'CircularStd-Medium',
    fontWeight: 'normal'
},
filtermodalHeader:{
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
});

//   export default ShippingSummary;