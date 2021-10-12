import React, {useRef, useState, useEffect, Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Modal,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Container, Button, Text, Thumbnail} from 'native-base';
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from "react-native-animatable";

const {width: screenWidth} = Dimensions.get('window');
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

var carouselItems = [
  {
    title: 'Welcome to Share App ',
    description: 'To help increase followers on social media',
    illustration: require('../assets/slider-1.png'),
  },
  {
    title: 'Easy and Secure ',
    description: 'Enjoy safer and faster',
    illustration: require('../assets/slider-2.png'),
  },
];
function TypeScreen(props){
const[activeIndex,setactiveIndex]=useState(0);

 function _renderItem({item, index}) {
    return (
      <View style={{backgroundColor: '#f2f2f2'}}>
          <Image
                style={styles.tinyLogo}
                source={item.illustration}
                parallaxFactor={0.4}
              />
        
          <Animatable.Text  style={styles.titleStyle} animation="bounce" iterationCount={1} direction="alternate">

              {item.title}
            </Animatable.Text>
          <Animatable.Text  style={styles.presentText} numberOfLines={2} animation="tada" iterationCount={1} direction="alternate">

            {item.description}
          </Animatable.Text>
      </View>
    );
  }
 function pagination() {
    
    return (
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        containerStyle={{ alignSelf: 'center'}}
        dotStyle={{
          width: 20,
          height: 8,
          borderRadius: 5,
          marginHorizontal: -4,
          backgroundColor: '#f9943b',
        }}
        inactiveDotStyle={
          {
          backgroundColor: 'rgba(247, 218, 217, 0.92)',
            width: 8,
            height: 8
          }
        }
        inactiveDotOpacity={1}
        inactiveDotScale={0.9}
      />
    );
  }
  
    var {navigate} = props.navigation;
    return (
      <View style={styles.containerView}>
        <LinearGradient
                    colors={[ '#f2f2f2', '#f2f2f2', '#f2f2f2',  ]}
                    style={styles.linearGradient}
                    start={{ x: 1, y: 0.5 }}
                    end={{ x:1, y:0}}
                >
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
              
                <Carousel
                  layout={'default'}
                  // ref={(ref) => (this.carousel = ref)}
                  data={carouselItems}
                  sliderWidth={screenWidth}
                  itemWidth={screenWidth}
                  sliderHeight={screenWidth}
                  renderItem={_renderItem}
                  onSnapToItem={(index) => setactiveIndex(index)}
                  loop={true}
                  // autoplay={true}
                  enableMomentum={false}
                  lockScrollWhileSnapping={true}
                />
             </View> 
        </LinearGradient>
          

        <View style={styles.contentView}>
          {/* <View>
                        <Text style={styles.heading}>find latest news about bahria. </Text>
                    </View> */}
          {/* <TouchableOpacity onPress={goForward}>
                            <Thumbnail square source= {require('../assets/dot.png')} />

                    </TouchableOpacity> */}
          <View>
                {/* <Text style={styles.presentText}>Lorem Ipsum est simplement du faux texte employé dans la composition</Text> */}
                  <View  style={styles.paginationStyle}>{pagination()}</View>  
              </View>
                <Animatable.View style={styles.btnContainer} animation="shake" iterationCount={1} direction="alternate">
                 
                  <Button medium 
                      style={styles.loginBtn} 
                      onPress={() =>navigate('login') }>
                      <Text style={styles.loginText}>Get Started</Text>
                  </Button>
              </Animatable.View>
        </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  contentView: {
    // position: 'absolute',
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  heading: {
    color: '#4c76be',
    justifyContent: 'space-between',
    padding: 40,
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  loginBtn: {
    color: 'white',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    backgroundColor: '#f9943b',
    alignContent: 'center',
    marginBottom: 10,
    borderRadius: 6,
    width: '70%'
  },
  registerBtn: {
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: '#4c76be',
    width: '70%',
  },
  textStyle: {
    color: 'white',
    justifyContent: 'space-between',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 22,
  },
  loginText: {
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    fontSize: 13,
    color: '#fff',
    textTransform: 'uppercase',
  },
  registerText: {
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    textTransform: 'capitalize',
  },

  thumnailStyle: {
    marginTop: 120,
    marginBottom: 0,
    width: '32%',
    height: 100,
    borderRadius: 2,
    alignSelf: 'baseline',
    marginBottom: 110,
  },
  orCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  singleLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#4c76be',
    width: '38%',
  },
  orText: {
    color: '#4c76be',
    fontSize: 15,
    paddingRight: 10,
    paddingLeft: 10,
  },
  

  item: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 0,
    width: '100%',
  },
  imageStyle: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  titleStyle: {
    // position: 'absolute',
    color: '#000',
    bottom: 5,
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'tanseek-modern-pro-arabic',
    width: '100%',
    alignSelf: 'center',
    marginTop: 25
  },
  tinyLogo: {
    width: Dimensions.get('window').width ,
    height: Dimensions.get('window').height / 2.8,
    paddingTop: 10,
    alignSelf: 'center'
  },
  presentText:{
    // position: 'absolute',
    // bottom: -38,
    fontSize: 14,
    color: '#747474',
    textAlign: 'center',
    paddingBottom: 10,
    fontFamily: 'tanseek-ar-lt',
    width: '90%',
    alignSelf: 'center',
    lineHeight: 18
},
  dftClr:{
    fontFamily: 'tanseek-modern-pro-arabic',
    fontSize: 25,
    color: '#c70602',
  },
  paginationStyle:{
    marginTop: 30
  },
  linearGradient:{
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
},
btnContainer:{
  alignSelf: 'center',
  alignItems: 'center',
  alignContent: 'center',
  width: "85%"
}
});
 export default TypeScreen;