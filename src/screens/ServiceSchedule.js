import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Card,Body,Text, Thumbnail, Button,Item, Input,    } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import Feather from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

function ServiceSchedule({route,navigation}) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    // navigation.setOptions({
    //     headerShown: false
    //   });

// export default class ServiceSchedule extends Component {
//     static navigationOptions = {
//         header: null
//     }
//         constructor() {
//             super();
//             this.state = {
//               modalVisible: false,
//             };
//           }
//           toggleModal(visible) {
//            this.setState({ modalVisible: visible });
//         }
        
//         render() {
//             const { navigate } = this.props.navigation;

    return (
        <ScrollView>
            <View style={styles.containerView}>
                
                <Modal transparent = {true}
                        isVisible={isModalVisible}
                        style={{borderTopRightRadius: 20,borderTopLeftRadius: 20,marginLeft: 0,marginRight: 0}}
                        >
                        <View style={{borderTopRightRadius: 20,borderTopLeftRadius: 20,paddingBottom: 20,width: '100%', height: '75%',top: '18%', alignSelf: 'center', justifyContent: 'flex-start', backgroundColor: '#fff', }}>
                                     
                        <View style={styles.modalView}>
                            <Thumbnail style={styles.minusIcon} small square source={require('../assets/minus-icon.png')} />

                            <View style={styles.modalHeader}>
                                <Text style={styles.modalText}>Filter</Text>
                                <Icon name="times" color="#747474" style={{fontSize: 18,padding:5}} 
                                                onPress={toggleModal}
                                                />
                            </View>
                            
                            <View style={styles.modalBody}>
                                
                                <View>
                                    <Text style={styles.sallabel}>Service Type </Text>
                                    <DropDownPicker
                                            items={[
                                                {label: 'Select delivery method', value: 'sdeliverym',  selected: true, },
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
                                            arrowColor="#747474"
                                            arrowSize={19}
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
                                            arrowColor="#747474"
                                            arrowSize={19}
                                        />
                                </View>
                                <View style={styles.dropBottomContainer}>
                                    <View style={{width:'50%'}}>
                                        <Text style={styles.sallabel}> From </Text>
                                        <DropDownPicker
                                                items={[
                                                    {label: 'Select from', value: 'sfrom',  selected: true, },
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
                                                arrowColor="#747474"
                                                arrowSize={19}
                                            />
                                    </View>
                                    <View style={{width:'50%'}}>
                                        <Text style={styles.sallabel}> To </Text>
                                        <DropDownPicker
                                                items={[
                                                    {label: 'Select to', value: 'sto',  selected: true, },
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
                                                arrowColor="#747474"
                                                arrowSize={19}
                                            />
                                    </View>
                                </View>

                                <View style={styles.dropBottomContainer}>
                                    <View style={{width:'50%'}}>
                                        <Text style={styles.sallabel}> Source Port </Text>
                                        <DropDownPicker
                                                items={[
                                                    {label: 'Select source', value: 'ssport',  selected: true, },
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
                                                arrowColor="#747474"
                                                arrowSize={19}
                                            />
                                    </View>
                                    <View style={{width:'50%'}}>
                                        <Text style={styles.sallabel}> Destination Port </Text>
                                        <DropDownPicker
                                                items={[
                                                    {label: 'Select destination', value: 'sdport',  selected: true, },
                                                ]}
                                                containerStyle={{height: 45,}}
                                                style={styles.dropDownContainer}
                                                itemStyle={{
                                                    justifyContent: 'flex-start',
                                                }}
                                                dropDownStyle={{zIndex: 1,backgroundColor: '#fff',color: '#fff',marginHorizontal: 15,width: '92%'}}
                                                labelStyle={{
                                                    fontSize: 12.2,
                                                    color: '#747474',
                                                    fontFamily: 'CircularStd-Medium',
                                                }}
                                                arrowColor="#747474"
                                                arrowSize={19}
                                            />
                                    </View>
                                </View>


                                <View style={styles.btnContainer}>
                                    <Button rounded medium style={styles.nextBtn} 
                                            onPress = {toggleModal}>
                                        <Text style={styles.nextStyle} >Show Results</Text>
                                    </Button>
                                    <Button block medium style={styles.clearBtn} 
                                            onPress = {toggleModal}>
                                        <Text style={styles.clearStyle} >Clear </Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                <LinearGradient
                    colors={['#3dbea1', '#33a59f', '#23799e' ]}
                    style={styles.linearGradient}
                    start={{x: 0, y: 0}} 
                    end={{x: 1, y: 0.5}}
                >
                    

                    <View style={styles.headerStyle}>
                        <Feather onPress={() => navigation.navigate('menu')}
                        name='angle-left'
                        size={30}
                        color='#fff' style={{paddingHorizontal: 5}} />
                        <Text style={styles.myInventoryStyle}>Service Schedule</Text>
                        
                    </View>
                    <View>
                        <Item fixedLabel style={styles.inputContainer}>
                            <Input placeholderTextColor='#fff' disabled style={styles.inputStyle} placeholder="Select service type" />
                            <DropDownPicker
                                items={[
                                    {label: 'Air Cargo Express', value: 'sst',  selected: true, },
                                ]}
                                containerStyle={{height: 45,width: '50%',}}
                                style={{backgroundColor: '#5fbfb2',borderWidth: 0,borderColor: '#5fbfb2',borderBottomWidth: 0,}}
                                itemStyle={{
                                    justifyContent: 'flex-start',
                                }}
                                dropDownStyle={{zIndex: 10,elevation: 1,backgroundColor: '#5fbfb2',color: '#fff',borderColor: '#5fbfb2'}}
                                labelStyle={{
                                    fontSize: 12,
                                    color: '#fff',
                                    fontFamily: 'CircularStd-Book',
                                }}
                                arrowColor="#fff"
                                arrowSize={19}
                            />
                            
                        </Item>
                    </View>
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
                        <View style={styles.dropCont}>
                            <Item fixedLabel style={styles.inputContainer}>
                            <DropDownPicker
                                    items={[
                                        {label: 'From', value: 'from',  selected: true, },
                                    ]}
                                    containerStyle={{height: 45,width: '100%',}}
                                    style={{backgroundColor: '#5fbfb2',borderWidth: 0,borderColor: '#5fbfb2',borderBottomWidth: 0,}}
                                    itemStyle={{
                                        justifyContent: 'flex-start',
                                    }}
                                    dropDownStyle={{zIndex: 2,backgroundColor: '#5fbfb2',color: '#fff',borderColor: '#5fbfb2'}}
                                    labelStyle={{
                                        fontSize: 12,
                                        color: '#fff',
                                        fontFamily: 'CircularStd-Book',
                                    }}
                                    arrowColor="#fff"
                                    arrowSize={19}
                                />
                            </Item>
                        </View>

                        <View style={styles.dropCont}>
                            <Item fixedLabel style={styles.inputContainer}>
                                <DropDownPicker
                                    items={[
                                        {label: 'To', value: 'to',  selected: true, },
                                    ]}
                                    containerStyle={{height: 45,width: '100%',}}
                                    style={{backgroundColor: '#5fbfb2',borderWidth: 0,borderColor: '#5fbfb2',borderBottomWidth: 0,}}
                                    itemStyle={{
                                        justifyContent: 'flex-start',
                                    }}
                                    dropDownStyle={{zIndex: 2,backgroundColor: '#5fbfb2',color: '#fff',borderColor: '#5fbfb2'}}
                                    labelStyle={{
                                        fontSize: 12,
                                        color: '#fff',
                                        fontFamily: 'CircularStd-Book',
                                    }}
                                    arrowColor="#fff"
                                    arrowSize={19}
                                />
                            </Item>
                        </View>
                    </View>
                    
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center'}}>
                        <View style={styles.dropCont}>
                            <Item fixedLabel style={styles.inputContainer}>
                            <DropDownPicker
                                    items={[
                                        {label: 'Select source port', value: 'from',  selected: true, },
                                    ]}
                                    containerStyle={{height: 45,width: '100%',}}
                                    style={{backgroundColor: '#5fbfb2',borderWidth: 0,borderColor: '#5fbfb2',borderBottomWidth: 0,}}
                                    itemStyle={{
                                        justifyContent: 'flex-start',
                                    }}
                                    dropDownStyle={{zIndex: 1,backgroundColor: '#5fbfb2',color: '#fff',borderColor: '#5fbfb2'}}
                                    labelStyle={{
                                        fontSize: 12,
                                        color: '#fff',
                                        fontFamily: 'CircularStd-Book',
                                    }}
                                    arrowColor="#fff"
                                    arrowSize={19}
                                />
                            </Item>
                        </View>

                        <View style={styles.dropCont}>
                            <Item fixedLabel style={styles.inputContainer}>
                                <DropDownPicker
                                    items={[
                                        {label: 'Select destination port', value: 'to',  selected: true, },
                                    ]}
                                    containerStyle={{height: 45,width: '100%',}}
                                    style={{backgroundColor: '#5fbfb2',borderWidth: 0,borderColor: '#5fbfb2',borderBottomWidth: 0,}}
                                    itemStyle={{
                                        justifyContent: 'flex-start',
                                    }}
                                    dropDownStyle={{zIndex: 1,backgroundColor: '#5fbfb2',color: '#fff',borderColor: '#5fbfb2'}}
                                    labelStyle={{
                                        fontSize: 11,
                                        color: '#fff',
                                        fontFamily: 'CircularStd-Book',
                                    }}
                                    arrowColor="#fff"
                                    arrowSize={19}
                                />
                            </Item>
                        </View>
                    </View>

                    <View style={styles.searchbtnContainer}>
                    <Button medium rounded
                        style={styles.loginBtn} 
                        onPress = {toggleModal} >
                        <Text style={styles.loginText} >Search</Text>
                    </Button>
                </View>
                    
                </LinearGradient>
                
                 
                <View style={styles.bottomContainer}>
                <Thumbnail style={styles.minusIcon} small square source={require('../assets/minus-icon.png')} />
                   
                    <View style={styles.searchHeader}>
                        
                        <Item style={styles.searchMain}>
                            <Icon name="search" size={17} style={styles.searchIcon} />
                            <Input
                            placeholderTextColor="black"
                            placeholder="Search here..."
                            style={styles.searchStyle}
                            />
                            <TouchableOpacity onPress = {toggleModal}>
                                    <Thumbnail style={styles.filterIcon} small square source={require('../assets/filter.png')} />
                            </TouchableOpacity>
                        </Item>
                    </View>
                    
                    <View>
                        <Card style={{borderWidth: 1,borderRadius: 4}}>
                            <Body style={styles.cardStyle}>
                                <View style={styles.orderContainer}>
                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>Service:</Text>
                                        <Text style={styles.orderNo}>RORO</Text>
                                    </View>

                                    <View style={styles.carrierCont}>
                                        <Text style={styles.orderId}>Carrier:</Text>
                                        <Text style={styles.orderNo}>Sallum lines Switzerland SA</Text>
                                    </View>

                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>Transit time:</Text>
                                        <Text style={styles.orderNo}>17 days</Text>
                                    </View>
                                </View>

                                <View style={styles.orderContainer}>
                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>ETD:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>
                                    </View>

                                    <View style={styles.carrierCont}>
                                        <Text style={styles.orderId}>ETA:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>
                                    </View>

                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>Cut off:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>  
                                    </View>
                                </View>

                                <View style={styles.orderContainer}>
                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>Source Port:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>
                                    </View>

                                    <View style={styles.carrierCont}>
                                        <Text style={styles.orderId}>Destination Port:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>
                                    </View>

                                    <View style={styles.buttonCont}>
                                        <Button small rounded 
                                                style={styles.scheduleBtn}
                                                >
                                            <Text style={styles.btnText}>Schedule</Text>
                                        </Button>
                                    </View>
                                </View>

                                

                            </Body>
                        </Card>
                            
                        <Card style={{borderWidth: 1,borderRadius: 4}}>
                            <Body style={styles.cardStyle}>
                                <View style={styles.orderContainer}>
                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>Service:</Text>
                                        <Text style={styles.orderNo}>RORO</Text>
                                    </View>

                                    <View style={styles.carrierCont}>
                                        <Text style={styles.orderId}>Carrier:</Text>
                                        <Text style={styles.orderNo}>Sallum lines Switzerland SA</Text>
                                    </View>

                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>Transit time:</Text>
                                        <Text style={styles.orderNo}>17 days</Text>
                                    </View>
                                </View>

                                <View style={styles.orderContainer}>
                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>ETD:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>
                                    </View>

                                    <View style={styles.carrierCont}>
                                        <Text style={styles.orderId}>ETA:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>
                                    </View>

                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>Cut off:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>  
                                    </View>
                                </View>

                                <View style={styles.orderContainer}>
                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>Source Port:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>
                                    </View>

                                    <View style={styles.carrierCont}>
                                        <Text style={styles.orderId}>Destination Port:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>
                                    </View>

                                    <View style={styles.buttonCont}>
                                        <Button small rounded 
                                                style={styles.scheduleBtn}
                                                >
                                            <Text style={styles.btnText}>Schedule</Text>
                                        </Button>
                                    </View>
                                </View>

                                

                            </Body>
                        </Card>
                            
                        <Card style={{borderWidth: 1,borderRadius: 4}}>
                            <Body style={styles.cardStyle}>
                                <View style={styles.orderContainer}>
                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>Service:</Text>
                                        <Text style={styles.orderNo}>RORO</Text>
                                    </View>

                                    <View style={styles.carrierCont}>
                                        <Text style={styles.orderId}>Carrier:</Text>
                                        <Text style={styles.orderNo}>Sallum lines Switzerland SA</Text>
                                    </View>

                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>Transit time:</Text>
                                        <Text style={styles.orderNo}>17 days</Text>
                                    </View>
                                </View>

                                <View style={styles.orderContainer}>
                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>ETD:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>
                                    </View>

                                    <View style={styles.carrierCont}>
                                        <Text style={styles.orderId}>ETA:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>
                                    </View>

                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>Cut off:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>  
                                    </View>
                                </View>

                                <View style={styles.orderContainer}>
                                    <View style={styles.orderCont}>
                                        <Text style={styles.orderId}>Source Port:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>
                                    </View>

                                    <View style={styles.carrierCont}>
                                        <Text style={styles.orderId}>Destination Port:</Text>
                                        <Text style={styles.orderNo}>April 13, 2021</Text>
                                    </View>

                                    <View style={styles.buttonCont}>
                                        <Button small rounded 
                                                style={styles.scheduleBtn}
                                                >
                                            <Text style={styles.btnText}>Schedule</Text>
                                        </Button>
                                    </View>
                                </View>

                                

                            </Body>
                        </Card>
                            

                    </View>
                </View>
                
                
                
                        
            </View>
      </ScrollView>
    );
  }



const styles = StyleSheet.create({
    containerView:{
        flex: 1, 
        alignItems: 'center', 
        backgroundColor:'#f5f5f5',
    },
    checkStyle:{
        borderRadius: 50,
        transform: [{ scaleX: 1 }, { scaleY: 1 }],
        borderColor: '#c60602',
        borderWidth: 10,
        borderBottomWidth: 5,
        borderTopWidth: 5,
        borderLeftWidth: 5,
        borderRightWidth: 5,
        marginRight: 16,
        backgroundColor: '#f8f8f8',
        marginLeft: -10,
    },
    rightText:{
        color: '#fff',
        fontSize: 13,
        backgroundColor: '#b4cfd2',
        paddingVertical: 14,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        fontFamily: 'CircularStd-Book',
        width: '19%',
        textAlign: 'center'
    },
    orderCont:{
        width: '30%',
    },
    carrierCont:{
        width: '38%'
    },
    buttonCont:{
        alignSelf:'flex-end'
    },
    orderContainer:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 0,
        paddingVertical: 8,
    },
    cardStyle:{
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        paddingVertical: 7,
        marginHorizontal: 12,
        zIndex: 1,
        marginBottom: 10
    },
    orderId:{
        color: '#747474',
        fontFamily: 'CircularStd-Book',
        fontSize: 13,
        paddingBottom: 3
    },
    orderNo:{
        color: '#000',
        fontSize: 13,
        fontFamily: 'CircularStd-Book',
        paddingBottom: 2,
        alignSelf: 'flex-start',
    },
    headerStyle:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginBottom: 0,
        paddingVertical: 10,
    },
    myInventoryStyle:{
        fontSize: 15,
        fontFamily: 'CircularStd-Bold',
        paddingTop:12,
        paddingBottom: 10,
        color:'#fff',
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    scheduleBtn:{
        backgroundColor: '#F9E6E5',
        justifyContent:'flex-start',
        alignContent: 'flex-end',
        alignItems: 'flex-end'
    },
    btnText:{
        fontFamily: 'CircularStd-Medium',
        fontSize: 12,
        textTransform: 'capitalize',
        color:'#c60602'
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
        elevation: 0,
        borderRadius: 20
    },
    searchHeader: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
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
   
    calIcon:{
        height: 15,
        width: 15,
    },
    companyIcon:{
        height: 18,
        width: 18,
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
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        alignSelf: 'baseline'
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
        color: '#c60602',
        textAlign:'right',
        fontFamily: 'CircularStd-Bold',
        alignSelf:'flex-end',
    },
    sizeIn:{
        color: '#ffc413',
        fontSize: 12,
        paddingBottom: 9,
        fontFamily: 'CircularStd-Book',
        alignSelf: 'flex-end',
        textAlign: 'right',
    },
    compName:{
        fontSize: 12,
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'CircularStd-Book',
        color: '#000',
        textAlign: 'right',
        alignSelf: 'flex-end',
        paddingLeft: 4
    },
    companyCont:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignSelf: 'flex-end',
        alignContent: 'flex-end',
        marginTop: 25
    },
    totalSpend:{
        color: '#000',
        fontSize: 15,
        fontFamily: 'CircularStd-Bold',
        paddingBottom: 2,
        alignSelf: 'flex-start',
    },
    pendingText:{
        color: '#ffc005',
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
        paddingBottom: 18,
        paddingTop: 10
    },
    debitContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#957cce',
        borderRadius: 12,
        padding: 12,
        width: '85%',
        alignSelf: 'center',
        paddingBottom: 30
    },
    debitContent:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    creditContainer:{
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#36a1fb',
        borderRadius: 12,
        width: '95%',
        padding: 13,
        marginTop: -25,
        alignSelf: 'center'
    },
    
    debitIcon:{
        height: 25,
        width: 28
    },
    debitText:{
        fontSize: 16,
        color: '#fff',
        fontFamily: 'CircularStd-Medium',
        textAlign: 'center',
    },
    balanceCont:{
        paddingTop: 15,
        paddingBottom: 10,
        borderBottomColor: '#50acfb',
        borderBottomWidth: 1,
        width: '100%'
    },
    balNo:{
        fontSize: 25,
        color: '#fff',
        fontFamily: 'CircularStd-Bold',
        textAlign: 'center',
    },
    balText:{
        fontSize: 12,
        color: '#fff',
        paddingTop: 2,
        fontFamily: 'CircularStd-Book',
        textAlign: 'center'
    },
    presentCont:{
        paddingTop: 9,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
    },
    prevText:{
        fontSize: 13,
        color: '#fff',
        fontFamily: 'CircularStd-Book',
        textAlign: 'center',
    },

    blockContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        width: '95%',
        marginTop: 10,
        alignSelf: 'center'
    },
    depositContainer:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4099a8',
        borderRadius: 8,
        width: '32%',
        alignSelf: 'center',
        paddingHorizontal: 2,
        paddingVertical: 10
    },
    depositIcon:{
        height: 24,
        width: 25
    },
    addDepText:{
        color: '#fff',
        fontSize: 11,
        paddingTop: 10
    },

    minusIcon:{
        width: 35,
        height: 7,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    transCont:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    seeAll:{
        color: '#666666',
        fontSize: 12
    },
    inputStyle:{
        color: '#fff',
        justifyContent: 'space-between',
        paddingLeft: 10,
        fontSize: 13,
        borderWidth: 0,
        width: '100%',
        fontFamily: 'CircularStd-Medium',
        padding: 0,
        height: 45
    },
    inputContainer:{
        width: '100%',
        borderWidth: 1,
        borderColor: '#5fbfb2',
        borderRadius: 6,
        paddingLeft: 0,
        marginBottom: 10,
        paddingRight: 0,
        marginTop: 0,
        backgroundColor: '#5fbfb2'
    },
    inputCont:{
        borderWidth: 1,
        borderColor: '#dbdbdb',
        borderTopColor: '#dbdbdb',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderLeftColor:'#dbdbdb',
        borderRightWidth: 1,
        borderRightColor: '#dbdbdb',
        borderRadius: 6,
        marginBottom: 10,
        paddingRight: 0,
        marginTop: 0,
        backgroundColor: '#fff',
        width: '100%',
        height: 45,
    },
    bottominputStyle:{
        color: '#000',
        justifyContent: 'space-between',
        paddingLeft: 10,
        fontSize: 13,
        borderWidth: 0,
        width: '100%',
        fontFamily: 'CircularStd-Medium',
        padding: 0,
    },
    formContainer:{
        borderTopColor: '#dbdbdb',
        borderTopWidth: 0.5,
        paddingTop: 10,

    },
    amountCont:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 3
    },
    availAmount:{
        color: '#000',
        fontFamily: 'CircularStd-Bold',
        fontSize: 14,
    },
    amountNo:{
        color: '#747474',
        fontSize: 13,
        fontFamily: 'CircularStd-Book',
        alignSelf: 'flex-end',
        textAlign: 'right'
    },
    sallabel:{
        fontSize: 14,
        marginTop: 7,
        marginBottom: 2,
        paddingLeft: 12,
        color: '#000',
        fontFamily: 'CircularStd-Medium',
        fontWeight: 'normal'
    },
    attachIcon:{
        height: 16,
        width: 16,
        borderRadius: 0,
        marginRight: 5
    },
    attactCont:{
        flex:1,
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center', 
        width:'100%',
        borderWidth: 1,
        borderColor: '#cdcdcd', 
        borderStyle:'dashed',
        borderRadius: 8, 
        padding: 18,
        marginTop: 7
    },
    attacStyle:{
        fontSize: 13,
      fontFamily: 'CircularStd-Medium',
      color: '#000'
    },
    emailCont:{
        width: '100%',
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        paddingTop: 5
    },
    bottomContainer:{
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 10,
        borderBottomWidth: 0,
        paddingBottom: 20,
        zIndex:10,
        marginTop: -20,
        backgroundColor: '#fff',
        paddingHorizontal: 12
    },
    dropCont:{
        width: '49%'
    },
    
    searchbtnContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    
    loginBtn:{
        backgroundColor: '#c70602',
        marginBottom: 0,
        paddingHorizontal: 30
    },
    loginText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'CircularStd-Medium',
        textTransform: 'capitalize'
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
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 3,
        paddingRight: 6,
        marginBottom: 10,
        paddingTop: 8,
    },
});

export default ServiceSchedule;
