import React, { useState,Component } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Card,Body, Tab, Tabs,TabHeading,Text, Thumbnail, Button,Item, Input,} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';


// function ShipmentScreen({route,navigation}) {
//     const [isModalVisible, setModalVisible] = useState(false);
//     const [isReceiveVisible, setReceiveVisible] = useState(false);

//     const toggleModal = () => {
//         setModalVisible(!isModalVisible);
//     };

    // const toggleReceived = () => {
    //     setReceiveVisible(!isReceiveVisible);
    // };

export default class ShipmentScreen extends Component {
    
    constructor() {
        super();
        this.state = {
            isModalVisible: false,
            setReceiveVisible: false,
            select_options_modal: false,
            flagParcelPending: false,
        };
      }
      toggleModal(visible) {
       this.setState({ isModalVisible: visible });
    }
    state = { flag: true,flagPend: true,flagComp: true, flagBorder: true, flagBorderParcel: true,flagParRec:true, flagParPend:true,flagParComp:true, };

    toggleReceived = () => {
        this.setState((state) => ({
          setReceiveVisible: 'firstTab',
        }));
        this.setState(previousStatePend => {
            return { flagParcelReceived: !previousStatePend.flagParRec };
          });
      };

      togglePending = () => {
        this.setState((state) => ({
            setReceiveVisible: 'secondTab',
        }));
        this.setState(previousStatePend => {
            return { flagParcelPending: !previousStatePend.flagParPend };
          });
      };

      toggleComplete = () => {
        this.setState((state) => ({
            setReceiveVisible: 'thirdTab',
        }));
        this.setState(previousStatePend => {
            return { flagParcelComplete: !previousStatePend.flagParComp };
          });
      };
    
    render() {
        const { navigate } = this.props.navigation;
    return (
        <ScrollView>
            <View style={styles.containerView}>

                <Modal transparent={true}
                        isVisible={this.state.isModalVisible}
                        style={{borderTopRightRadius: 20,borderTopLeftRadius: 20,marginLeft: 0,marginRight: 0}}
                    >
                    <View style={{borderTopRightRadius: 20,borderTopLeftRadius: 20,width: '100%', height: '63%',top: '22%', alignSelf: 'center', justifyContent: 'flex-start', backgroundColor: '#fff', }}>
                                
                        <View style={styles.modalView}>
                            <Thumbnail style={styles.miniIcon} small square source={require('../assets/minus-icon.png')} />

                            <View style={styles.modalHeader}>
                                <Text style={styles.modalText}>Filter</Text>
                                <Icon name="times" color="#747474" style={{fontSize: 18,padding:5}} 
                                                 onPress = {() => {this.toggleModal(!this.state.isModalVisible)}}
                                                />
                            </View>
                            
                            <View style={styles.modalBody}>
                                
                                <View>
                                    <Text style={styles.sallabel}>Delivery Method </Text>
                                    <DropDownPicker
                                            items={[
                                                {label: 'Select delivery method', value: 'sdm',  selected: true, },
                                            ]}
                                            containerStyle={{height: 45,}}
                                            style={styles.dropDownContainer}
                                            itemStyle={{
                                                justifyContent: 'flex-start',
                                            }}
                                            dropDownStyle={{backgroundColor: '#fff',color: '#fff',marginHorizontal: 15,width: '92%'}}
                                            labelStyle={{
                                                fontSize: 13,
                                                color: '#747474',
                                                fontFamily: 'CircularStd-Medium',
                                            }}
                                            arrowStyle={{color: '#747474'}}
                                        />
                                </View>

                                <View>
                                    <Text style={styles.sallabel}> Desired Service </Text>
                                    <DropDownPicker
                                            items={[
                                                {label: 'Select desired service', value: 'sds',  selected: true, },
                                            ]}
                                            containerStyle={{height: 45,}}
                                            style={styles.dropDownContainer}
                                            itemStyle={{
                                                justifyContent: 'flex-start',
                                            }}
                                            dropDownStyle={{backgroundColor: '#fff',color: '#fff',marginHorizontal: 15,width: '92%'}}
                                            labelStyle={{
                                                fontSize: 13,
                                                color: '#747474',
                                                fontFamily: 'CircularStd-Medium',
                                            }}
                                            arrowStyle={{color: '#747474'}}
                                        />
                                </View>
                                <View style={styles.dropBottomContainer}>
                                    <View style={{width:'50%'}}>
                                        <Text style={styles.sallabel}> ETA Date </Text>
                                        <DropDownPicker
                                                items={[
                                                    {label: 'Select eta date', value: 'sds',  selected: true, },
                                                ]}
                                                containerStyle={{height: 45,}}
                                                style={styles.dropDownContainer}
                                                itemStyle={{
                                                    justifyContent: 'flex-start',
                                                }}
                                                dropDownStyle={{zIndex: 1,backgroundColor: '#fff',color: '#fff',marginHorizontal: 15,width: '92%'}}
                                                labelStyle={{
                                                    fontSize: 13,
                                                    color: '#747474',
                                                    fontFamily: 'CircularStd-Medium',
                                                }}
                                                arrowStyle={{color: '#747474'}}
                                            />
                                    </View>
                                    <View style={{width:'50%'}}>
                                    <Text style={styles.sallabel}> Status </Text>
                                    <DropDownPicker
                                            items={[
                                                {label: 'Select status', value: 'sstatus',  selected: true, },
                                            ]}
                                            containerStyle={{height: 45,}}
                                            style={styles.dropDownContainer}
                                            itemStyle={{
                                                justifyContent: 'flex-start',
                                            }}
                                            dropDownStyle={{zIndex: 1,backgroundColor: '#fff',color: '#fff',marginHorizontal: 15,width: '92%'}}
                                            labelStyle={{
                                                fontSize: 13,
                                                color: '#747474',
                                                fontFamily: 'CircularStd-Medium',
                                            }}
                                            arrowStyle={{color: '#747474'}}
                                        />
                                </View>
                                    </View>


                                <View style={styles.btnContainer}>
                                    <Button rounded medium style={styles.nextBtn} 
                                             onPress = {() => {this.toggleModal(!this.state.isModalVisible)}}>
                                        <Text style={styles.nextStyle} >Show Results</Text>
                                    </Button>
                                    <Button block medium style={styles.clearBtn} 
                                             onPress = {() => {this.toggleModal(!this.state.isModalVisible)}}>
                                        <Text style={styles.clearStyle} >Clear </Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                
                <LinearGradient
                    colors={['#3ec1a1', '#35a9a0', '#27849e' ]}
                    style={styles.linearGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y:1 }}
                >
                    <View style={styles.orderContainer}>
                        <View style={styles.orderStyle}>
                            <Text style={styles.orderNo}>05</Text>
                            <Text style={styles.orderText}>Open Orders</Text>
                        </View>
                        <View style={styles.pendOrderStyle}>
                            <Text style={styles.orderNo}>20</Text>
                            <Text style={styles.orderText}>Pending Orders</Text>
                        </View>
                    </View>
                    <View style={styles.orderContainer}>
                        <View style={[styles.orderStyle, styles.outBalStyle]}>
                            <Text style={styles.orderNo}>$8,556.1</Text>
                            <Text style={styles.orderText}>Outstanding Balance</Text>
                        </View>
                        <View style={[styles.pendOrderStyle, styles.imdStyle]}>
                            <Text style={styles.orderNo}>$6,523.21</Text>
                            <Text style={styles.orderText}>Due Immediately</Text>
                        </View>
                    </View>
                
                </LinearGradient>
                
                
                <View style={{paddingHorizontal: 10,borderTopRightRadius: 20,borderTopLeftRadius: 20,marginTop: -20,elevation: 1,zIndex: 1,backgroundColor: '#f8f8f8'}}>
                    <Thumbnail style={styles.minusIcon} small square source={require('../assets/minus-icon.png')} />
                    <Text style={styles.myInventoryStyle}>My Shipments</Text>
                    
                    <View style={styles.searchHeader}>
                        <Item style={styles.searchMain}>
                            <Icon name="search" size={17} style={styles.searchIcon} />
                            <Input
                                    placeholderTextColor="black"
                                    placeholder="Search here..."
                                    style={styles.searchStyle}
                                    />
                            <TouchableOpacity onPress={() => {this.toggleModal(true)}}>
                                    <Thumbnail style={styles.filterIcon} small square source={require('../assets/filter.png')} />
                            </TouchableOpacity>
                        </Item>
                    </View>
                    <View style={styles.tabsContainer}>
                        <TouchableOpacity  style={styles.headStyle} onPress={this.toggleReceived}>
                            <Text style={{...styles.tabHeadingText, borderBottomColor: this.state.flagParcelReceived ? "#c70602" : "#f8f8f8", borderBottomWidth:2 }}>Overdue</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headStyle} onPress={this.togglePending}>
                            <Text style={{...styles.tabHeadingText, borderBottomColor: this.state.flagParcelPending ? "#c70602" : "#f8f8f8", borderBottomWidth:2 }}>Unpaid</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headStyle} onPress={this.toggleComplete}>
                            <Text style={{...styles.tabHeadingText, borderBottomColor: this.state.flagParcelComplete ? "#c70602" : "#f8f8f8", borderBottomWidth:2 }}>Complete</Text>
                        </TouchableOpacity>
                    </View>

                    { this.state.setReceiveVisible ?(
                        null
                        ):
                        <View style={styles.tabBody}>
                        <TouchableOpacity activeOpacity={.8} onPress={()=> navigate('order_detail')}>
                            <Card style={{borderRadius: 5}}>
                                <Body style={styles.cardStyle}>
                                    <View style={styles.midContent1}>
                                        <Text style={styles.totalSpendText}>8749575656</Text>
                                        <Text style={styles.totalSpend}>Qty: 2 | Ship Wt (ibs): 25</Text>
                                        <View style={styles.calendarStyle}>
                                            <View style={styles.favStyle}>
                                                <Thumbnail style={styles.favIcon} small square source={require('../assets/fav-icon.png')} />
                                            </View>
                                            <View style={styles.favStyle}>
                                                <Thumbnail style={styles.arpIcon} small square source={require('../assets/aeroplane.png')} />
                                            </View>
                                            <Thumbnail style={styles.calIcon} small square source={require('../assets/cal.png')} />
                                            <Text style={styles.timeStyle}>Apr 13, 2020</Text>
                                        </View>
                                    </View>
                                    <View style={styles.rightContent1}> 
                                        <Text style={styles.totalAmount}>$24.58 </Text>
                                        <Text style={styles.sizeIn}>Partially Paid</Text>
                                        <Text style={styles.weihtLB}>On Hold</Text>
                                    </View>
                                </Body>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={.8} onPress={()=> navigate('order_detail')}>
                            <Card style={{borderRadius: 5}}>
                                <Body style={styles.cardStyle}>
                                    <View style={styles.midContent1}>
                                        <Text style={styles.totalSpendText}>8749575656</Text>
                                        <Text style={styles.totalSpend}>Qty: 2 | Ship Wt (ibs): 25</Text>
                                        <View style={styles.calendarStyle}>
                                            <View style={styles.favStyle}>
                                                <Thumbnail style={styles.favIcon} small square source={require('../assets/fav-icon.png')} />
                                            </View>
                                            <View style={styles.favStyle}>
                                                <Thumbnail style={styles.arpIcon} small square source={require('../assets/aeroplane.png')} />
                                            </View>
                                            <Thumbnail style={styles.calIcon} small square source={require('../assets/cal.png')} />
                                            <Text style={styles.timeStyle}>Apr 13, 2020</Text>
                                        </View>
                                    </View>
                                    <View style={styles.rightContent1}> 
                                        <Text style={styles.totalAmount}>$24.58 </Text>
                                        <Text style={styles.sizeIn}>Partially Paid</Text>
                                        <Text style={styles.weihtLB}>On Hold</Text>
                                    </View>
                                </Body>
                            </Card>
                        </TouchableOpacity>
                        
                    </View>
                     }

                    {(this.state.setReceiveVisible === 'firstTab') && (
                                    
                            <View style={styles.tabBody}>
                                <TouchableOpacity activeOpacity={.8} onPress={()=> navigate('order_detail')}>
                                    <Card style={{borderRadius: 5}}>
                                        <Body style={styles.cardStyle}>
                                            <View style={styles.midContent1}>
                                                <Text style={styles.totalSpendText}>8749575656</Text>
                                                <Text style={styles.totalSpend}>Qty: 2 | Ship Wt (ibs): 25</Text>
                                                <View style={styles.calendarStyle}>
                                                    <View style={styles.favStyle}>
                                                        <Thumbnail style={styles.favIcon} small square source={require('../assets/fav-icon.png')} />
                                                    </View>
                                                    <View style={styles.favStyle}>
                                                        <Thumbnail style={styles.arpIcon} small square source={require('../assets/aeroplane.png')} />
                                                    </View>
                                                    <Thumbnail style={styles.calIcon} small square source={require('../assets/cal.png')} />
                                                    <Text style={styles.timeStyle}>Apr 13, 2020</Text>
                                                </View>
                                            </View>
                                            <View style={styles.rightContent1}> 
                                                <Text style={styles.totalAmount}>$24.58 </Text>
                                                <Text style={styles.sizeIn}>Partially Paid</Text>
                                                <Text style={styles.weihtLB}>On Hold</Text>
                                            </View>
                                        </Body>
                                    </Card>
                                </TouchableOpacity>

                                <TouchableOpacity activeOpacity={.8} onPress={()=> navigate('order_detail')}>
                                    <Card style={{borderRadius: 5}}>
                                        <Body style={styles.cardStyle}>
                                            <View style={styles.midContent1}>
                                                <Text style={styles.totalSpendText}>8749575656</Text>
                                                <Text style={styles.totalSpend}>Qty: 2 | Ship Wt (ibs): 25</Text>
                                                <View style={styles.calendarStyle}>
                                                    <View style={styles.favStyle}>
                                                        <Thumbnail style={styles.favIcon} small square source={require('../assets/fav-icon.png')} />
                                                    </View>
                                                    <View style={styles.favStyle}>
                                                        <Thumbnail style={styles.arpIcon} small square source={require('../assets/aeroplane.png')} />
                                                    </View>
                                                    <Thumbnail style={styles.calIcon} small square source={require('../assets/cal.png')} />
                                                    <Text style={styles.timeStyle}>Apr 13, 2020</Text>
                                                </View>
                                            </View>
                                            <View style={styles.rightContent1}> 
                                                <Text style={styles.totalAmount}>$24.58 </Text>
                                                <Text style={styles.sizeIn}>Partially Paid</Text>
                                                <Text style={styles.weihtLB}>On Hold</Text>
                                            </View>
                                        </Body>
                                    </Card>
                                </TouchableOpacity>
                                
                            </View>
 
                            )}
                    {(this.state.setReceiveVisible === 'secondTab') && (
                    null
                    )}

                    {(this.state.setReceiveVisible === 'thirdTab') && (
                    null
                    )}

                    {/* <Tabs  activeTabStyle={{backgroundColor: 'transparent',borderRadius: 10}} tabContainerStyle={{borderBottomWidth: 1,borderBottomColor: '#eeeff1',backgroundColor: 'transparent',elevation: 0,width: '80%',paddingVertical: 0,}} tabBarUnderlineStyle={{backgroundColor: '#c70602',borderBottomWidth: 0,elevation: 1,width: '5%',paddingHorizontal: 0 }}>
                        <Tab
                            style={{backgroundColor: '#f7f7f7',padding: 0,textAlign: 'left',alignContent: 'flex-start'}}
                            tabStyle={{backgroundColor: '#f7f7f7'}}
                            textStyle={{color: 'red',textAlign: 'left',alignSelf: 'flex-start',paddingLeft: 0}}
                            activeTabStyle={{backgroundColor: '#f7f7f7'}}
                            activeTextStyle={{color: '#c70602', fontWeight: 'normal'}}
                            heading={ <TabHeading style={{backgroundColor: 'transparent',paddingVertical: 0,paddingHorizontal: 0}}>

                                <Text style={styles.tabHeadingText}>Overdue</Text></TabHeading>
                            }>
                                
                        </Tab>
                        <Tab
                            style={{backgroundColor: '#f7f7f7',textAlign: 'left'}}
                            tabStyle={{backgroundColor: '#f7f7f7'}}
                            textStyle={{color: 'red'}}
                            activeTabStyle={{backgroundColor: '#f7f7f7'}}
                            activeTextStyle={{color: '#c70602', fontWeight: 'normal'}}
                            heading={ <TabHeading style={{backgroundColor: 'transparent',paddingVertical: 0,paddingLeft: 12,paddingRight: 12}}>
                                <Text style={styles.tabHeadingText}>Unpaid</Text></TabHeading>
                            }>
                            <View style={styles.tabBody}>
                                

                            </View>
                        </Tab>
                        <Tab
                            style={{backgroundColor: '#f7f7f7',}}
                            tabStyle={{backgroundColor: '#f7f7f7'}}
                            textStyle={{color: 'red'}}
                            activeTabStyle={{backgroundColor: '#f7f7f7'}}
                            activeTextStyle={{color: '#c70602', fontWeight: 'normal'}}
                            heading={ <TabHeading style={{backgroundColor: 'transparent',paddingVertical: 0,paddingLeft: 12,paddingRight: 4}}>
                                <Text style={styles.tabHeadingText}>Complete</Text></TabHeading>
                            }>
                            <View style={styles.tabBody}></View>
                        </Tab>
                    </Tabs>
                 */}
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
        backgroundColor:'#f5f5f5',
    },
    tabsContainer:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        paddingBottom: 10
    },
    tabHeadingText:{
        fontFamily: 'CircularStd-Book',
        color:'#747474',
        textAlign: 'left',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        fontSize: 13,
        width: 60,
        paddingBottom: 11
    },
    headStyle:{
        width: '20%'
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
      sallabel:{
        fontSize: 13,
        marginBottom: 4,
        paddingLeft: 14,
        color: '#000',
        fontFamily: 'CircularStd-Medium',
        fontWeight: 'normal',
        marginTop: 10
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
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#c6c6c6',
    },
    btnContainer:{
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
    headerStyle:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between',
        width: '100%',
        marginTop: 10,
        marginBottom: 0,
    },
    
    myInventoryStyle:{
        fontSize: 15,
        fontFamily: 'CircularStd-Bold',
        paddingTop:12,
        paddingBottom: 10
    },
    plusBtn:{
        backgroundColor: '#c60602',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center'
    },
    plusIcon:{
        fontSize: 11,
        color: '#fff',
    },
    addText:{
        fontFamily: 'CircularStd-Medium',
        fontSize: 11,
        textTransform: 'capitalize'
    },
    tabBody:{
        backgroundColor: '#f7f7f7',
        elevation: 0
    },
    searchHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 0,
      },
      searchMain: {
        backgroundColor: '#e9e9e9',
        width: '100%',
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: 0,
        marginBottom: 10,
        borderRadius: 8,
        borderBottomWidth: 0
      },
      searchIcon: {
        color: '#757575',
        fontSize: 18, 
      },
      searchStyle:{
          color: '#747474',
          fontSize: 13  
      },
     
      leftContent:{
          width: '13%',
          alignSelf: 'flex-start',
          padding: 4,
        borderWidth: 1,
        borderColor: '#2cb066',
        borderRadius: 8
      },
      calendarStyle:{
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    timeStyle:{
        fontSize:12,
        color: '#747474',
        paddingHorizontal: 4
    },
    cardStyle:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 8
    },
    cardItem:{
        padding: 5,
        borderRadius: 10,
        alignContent: 'flex-start',
        alignSelf: 'flex-start', 
        paddingHorizontal: 10
    },
    imgIcon:{
        height: 35,
        width: 35,
    },
    midContent:{
        width: '60%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 10
    },
    calIcon:{
        height: 15,
        width: 15,
        marginLeft: 6
    },
    
    rightContent:{
        width: '25%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    weightIcon:{
        height: 19,
        width: 19,
        alignSelf: 'center',
        marginTop: -7
    },
    
    carIcon:{
        height: 20,
        width: 25,
        alignSelf: 'center',
        marginTop: -7
    },
    midContent1:{
        width: '75%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 0
    },
    rightContent1:{
        width: '25%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    filterIcon:{
        height: 23,
        width: 20
    },
    pendingContent:{
        width: '85%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 10
    },
    catText:{
        color: '#000',
        fontSize: 18,
        fontFamily: 'CircularStd-Bold',
        paddingVertical: 0,
        alignSelf: 'flex-start',
    },
    catInv:{
        color: '#666666',
        fontFamily: 'CircularStd-Book',
        fontSize: 15,
        paddingTop: 9,
    },
    pendleftContent:{
        width: '13%',
        alignSelf: 'flex-start',
        alignContent: 'center',
      borderRadius: 0
    },
    pendingImg:{
        height: 40,
        width: 40,
        alignSelf: 'center'
    },
    leftIcon:{
        height: 20,
        width: 23
    },
    totalAmount:{
        fontSize: 16,
        color: '#000',
        textAlign:'right',
        fontFamily: 'CircularStd-Bold',
        alignSelf:'flex-end',
        marginTop: -5,
        marginBottom: 8
    },
    sizeIn:{
        color: '#ffc413',
        fontSize: 12,
        paddingBottom: 9,
        fontFamily: 'CircularStd-Book',
        alignSelf: 'flex-end',
        textAlign: 'right',
    },
    weihtLB:{
        fontSize: 12,
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'CircularStd-Book',
        color: '#ca130f',
        textAlign: 'right',
        alignSelf: 'flex-end',
    },
    totalSpend:{
        color: '#000',
        fontSize: 15,
        fontFamily: 'CircularStd-Bold',
        paddingBottom: 2,
        alignSelf: 'flex-start',
    },
    totalSpendText:{
        color: '#666666',
        fontFamily: 'CircularStd-Book',
        fontSize: 13,
        paddingBottom: 6
    },
    favIcon:{
        height: 14,
        width: 16,
    },
    arpIcon:{
        height: 13,
        width: 27,
        marginLeft: 6
    },
    favStyle:{
        paddingRight: 6,
        borderRightColor: '#e2e2e2',
        borderRightWidth: 1
    },
    linearGradient:{
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingHorizontal: 15,
        paddingBottom: 30,
        paddingTop: 10
    },
    orderContainer:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    orderStyle:{
        flexDirection: 'column',
        borderRightColor: '#81b9bb',
        borderRightWidth: 1,
        borderBottomColor: '#81b9bb',
        borderBottomWidth: 1,
        width: '50%',
        padding: 10,
        paddingRight: 0
    },
    pendOrderStyle:{
        borderBottomColor: '#81b9bb',
        borderBottomWidth: 1,
        width: '50%',
        padding: 10,
        paddingLeft: 0
    },
    imdStyle:{
        borderBottomWidth: 0
    },
    outBalStyle:{
        borderBottomWidth: 0
    },
    orderNo:{
        fontSize: 16,
        color: '#fff',
        paddingBottom: 5,
        fontFamily: 'CircularStd-Bold',
        textAlign: 'center',
        paddingBottom: 3
    },
    orderText:{
        fontSize: 13,
        color: '#9fd7d1',
        paddingBottom: 5,
        fontFamily: 'CircularStd-Book',
        textAlign: 'center'
    },
    minusIcon:{
        width: 35,
        height: 7,
        alignSelf: 'center',
        marginTop: 12 
    },
    miniIcon:{
        width: 25,
        height: 5,
        alignSelf: 'center',
        marginTop: 8 
    }
});

// export default ShipmentScreen;
