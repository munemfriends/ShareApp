import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Thumbnail, Text, Button, Input, Item} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DashboardScreen from '../screens/DashboardScreen';
import MenuScreen from '../screens/MenuScreen';
import InfluencersScreen from '../screens/InfluencersScreen';
import ChooseYourPlatform from '../screens/ChooseYourPlatform';
import SocialProfile from '../screens/SocialProfile';
import ShareReview from '../screens/ShareReview';
import UserVerificationCode from '../screens/UserVerificationCode';
import StatsScreen from '../screens/StatsScreen';
import StatsShareWith from '../screens/StatsShareWith';
import FollowersScreen from '../screens/FollowersScreen';
import TopSharingInfluencers from '../screens/TopSharingInfluencers';
import ProfileDetail from '../screens/ProfileDetail';
import TopSharingMoment from '../screens/TopSharingMoment';
import WalletScreen from '../screens/WalletScreen';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LogoOVerlap from '../components/LogoOVerlap';
import LoginScreen from '../screens/LoginScreen';
import LoginOrSignup from '../screens/LoginOrSignup';
import StartupScreen from '../screens/StartupScreen';
import ForgotPassword from '../screens/ForgotPassword';
import SignUpScreen from '../screens/SignUpScreen';
// import PasswordScreen from '../screens/PasswordScreen';
// import PersonalDetailScreen from '../screens/PersonalDetailScreen';
// import CompanyDetail from '../screens/CompanyDetail';
// import CongratulationsScreen from '../screens/CongratulationsScreen';
import SliderScreen from '../screens/SliderScreen';
// import {set} from 'react-native-reanimated';
// import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


function DashboardStackNavigator({route, navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Dashboard',
          header: () => <LogoOVerlap navigation={navigation} />,
        }}
        name="dashboard"
        component={DashboardScreen}
      />
    </Stack.Navigator>
    );
}
function InfluencersStackNavigator({route, navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Influencers',
          header: () => <LogoOVerlap navigation={navigation} />,
        }}
        name="influencers"
        component={InfluencersScreen}
      />
      <Stack.Screen
        name="choose_your_platform"
        component={ChooseYourPlatform}
        options={{
          title: 'Choose your platform',
          headerStyle: {
            backgroundColor: '#f9943a',
            height: 50,
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 14,
            color: '#fff',
          },
          headerRight: () => (
            <View style={{backgroundColor:'#fff',borderRadius: 50,paddingHorizontal: 6,paddingVertical: 2,marginRight: 15}}>
              <Feather
                name='user'
                size={23}
                color='#747474' />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="social_profile"
        component={SocialProfile}
        options={{
          title: 'Instagram',
          headerStyle: {
            backgroundColor: '#f9943a',
            height: 50,
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 14,
            color: '#fff',
          },
          headerRight: () => (
            <View style={{backgroundColor:'#fff',borderRadius: 50,paddingHorizontal: 6,paddingVertical: 2,marginRight: 15}}>
              <Feather
                name='user'
                size={23}
                color='#747474' />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="share_review"
        component={ShareReview}
        options={{
          title: 'Instagram',
          headerStyle: {
            backgroundColor: '#f9943a',
            height: 50,
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 14,
            color: '#fff',
          },
          headerRight: () => (
            <View style={{backgroundColor:'#fff',borderRadius: 50,paddingHorizontal: 6,paddingVertical: 2,marginRight: 15}}>
              <Feather
                name='user'
                size={23}
                color='#747474' />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="user_verification_code"
        component={UserVerificationCode}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#f9943a',
            height: 50,
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 14,
            color: '#fff',
          },
        }}
      />

      <Stack.Screen
        options={{
          title: 'Statistics',
          headerStyle: {
            backgroundColor: '#f9943a',
            height: 50,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 14,
            color: '#fff',
            width: '80%',
            textAlign:'center'
          },
        }}
        name="statistics"
        component={StatsScreen}
      />

      <Stack.Screen
        name="stats_share_with"
        component={StatsShareWith}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#f9943a',
            height: 50,
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 14,
            color: '#fff',
          },
        }}
      />
    </Stack.Navigator>
    );
}

function FollowersStackNavigator({route, navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: '',
          header: () => <LogoOVerlap navigation={navigation} />,
        }}
        name="followers"
        component={FollowersScreen}
      />
      <Stack.Screen
        name="top_sharing_influencers"
        component={TopSharingInfluencers}
        options={{
          title: 'My top sharing influencers',
          headerStyle: {
            backgroundColor: '#f9943a',
            height: 50,
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 14,
            color: '#fff',
          },
          headerRight: () => (
            <View style={{backgroundColor:'#fff',borderRadius: 50,paddingHorizontal: 6,paddingVertical: 2,marginRight: 15}}>
              <Feather
                name='user'
                size={23}
                color='#747474' />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="profile_detail"
        component={ProfileDetail}
        options={{
          title: 'My top sharing influencers',
          headerStyle: {
            backgroundColor: '#f9943a',
            height: 50,
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 14,
            color: '#fff',
          },
          headerRight: () => (
            <View style={{backgroundColor:'#fff',borderRadius: 50,paddingHorizontal: 6,paddingVertical: 2,marginRight: 15}}>
              <Feather
                name='user'
                size={23}
                color='#747474' />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="top_sharing_of_moment"
        component={TopSharingMoment}
        options={{
          title: 'Top sharing influencers of the moment',
          headerStyle: {
            backgroundColor: '#f9943a',
            height: 50,
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            alignSelf: 'center',
            fontSize: 14,
            color: '#fff',
          },
          headerRight: () => (
            <View style={{backgroundColor:'#fff',borderRadius: 50,paddingHorizontal: 6,paddingVertical: 2,marginRight: 15}}>
              <Feather
                name='user'
                size={23}
                color='#747474' />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
    );
}

function WalletStackNavigator({route, navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: '',
          header: () => <LogoOVerlap navigation={navigation} />,
        }}
        name="wallet"
        component={WalletScreen}
      />
    </Stack.Navigator>
    );
}

function MenuStackNavigator({route, navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'Menu',
          header: () => <LogoOVerlap navigation={navigation} />,
        }}
        name="menu"
        component={MenuScreen}
      />
    </Stack.Navigator>
    );
}



// function WalletStackNavigator({route, navigation}) {
//   React.useLayoutEffect(() => {
//     const routeName = getFocusedRouteNameFromRoute(route);
//     if (routeName === "add_deposit" || routeName === "deposit_success" || routeName === "make_payment" || routeName === "payment_success" || routeName === "pay_for_purchase"  ){
//         navigation.setOptions({tabBarVisible: false});
//     }else {
//         navigation.setOptions({tabBarVisible: true});
//     }
// }, [navigation, route]);
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen
//         options={{title: ''}}
//         name="wallet"
//         component={WalletScreen}
//       />
//     </Stack.Navigator>
//   );
// }

// function MenuStackNavigator({route,navigation}) {
//   React.useLayoutEffect(() => {
//     const routeName = getFocusedRouteNameFromRoute(route);
//     if (routeName === "service_schedule" || routeName === "payment_information" || routeName === "new_payment_method" || routeName === "my_profile" || routeName === "edit_profile" || routeName === "help_support" || routeName ===  "location_finder"){
//         navigation.setOptions({tabBarVisible: false});
//     }else {
//         navigation.setOptions({tabBarVisible: true});
//     }
// }, [navigation, route]);
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen
//         options={{
//           title: 'Menu',
//           header: () => <MenuHeader navigation={navigation} />,
//           }}
//           name="menu"
//           component={MenuScreen}
//         />

//         <Stack.Screen
//                 name="service_schedule"
//                 component={ServiceSchedule}
//               />
        
//         <Stack.Screen
//                 name="change_password"
//                 component={ChangePassword}
//               />

//         <Stack.Screen
//                 name="location_finder"
//                 component={LocationFinder}
//             />

//         <Stack.Screen
//                 name="payment_information"
//                 component={PaymentInformation}
//             />
//         <Stack.Screen
//                 name="new_payment_method"
//                 component={NewPaymentMethod}
//             />
//         <Stack.Screen
//                 name="my_profile"
//                 component={MyProfile}
//             />
//         <Stack.Screen
//                 name="edit_profile"
//                 component={EditProfile}
//             />

//         <Stack.Screen
//                 name="help_support"
//                 component={HelpSupport}
//             />
        
//         <Stack.Screen
//             name="help_support_detail"
//             component={HelpSupportDetail}
//             options={{
//               title: 'Air Cargo Express',
//               headerStyle: {
//                 backgroundColor: '#fff',
//                 height: 50,
//                 elevation: 0,
//               },
//               headerTintColor: '#747474',
//               headerTitleStyle: {
//                 alignSelf: 'center',
//                 fontFamily: 'CircularStd-Medium',
//                 fontSize: 14,
//                 color: '#747474'
//               },
//               headerLeft: () => (
//                 <View style={{paddingLeft: 14,}}>
//                   <Feather onPress={() => navigation.navigate('help_support')}
//                     name='angle-left'
//                     size={30}
//                     color='#747474' />
//                 </View>
//               ),
//             }}
//           />

//     </Stack.Navigator>
//   );
// }

// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardTabNavigator = ({navigation, route}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;
          if (route.name == 'home') {
            iconName = 'home';
          }  else if (route.name == 'wallet') {
            iconName = 'wallet';
          } else if (route.name == 'menu') {
            iconName = 'th-large';
          }
          else if (route.name == 'influencers') {
            iconName = 'edit';
          } else if (route.name == 'followers') {
            iconName = 'users';
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#f9943b',
        inactiveTintColor: '#747474',

        // showIcon: 'true',
        // showLabel: (Platform.OS !== 'android'),
        tabBarSelectedItemStyle: {
          borderTopWidth: 2,
          height: 3,
          width: 10,
        },
        labelStyle: {
          fontSize: 12,
          fontFamily: 'CircularStd-Book',
          paddingBottom: 5,
        },
        style: {
          backgroundColor: '#fff',
          height: 60,
          paddingVertical: 0,
        },
      }}>
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.activetabStyle}>
                <Thumbnail small square style={styles.activeImgStyle} source={require('../assets/tabs/home-active.png')} />
                <Text style={styles.activetextStyle}>Home</Text>
              </View>
            ) : (
              <View style={styles.inActivetabStyle}>
                <Thumbnail small square  style={styles.activeImgStyle} source={require('../assets/tabs/home.png')} />
                <Text style={styles.inActivetextStyle}>Home</Text>
              </View>
            ),
        }}
        name="dashboard"
        component={DashboardStackNavigator}
      />

      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.activetabStyle}>
                <Thumbnail small square style={styles.activeImgStyle} source={require('../assets/tabs/influencer-active.png')} />
                <Text style={styles.activetextStyle}>influencer</Text>
              </View>
            ) : (
              <View style={styles.inActivetabStyle}>
                <Thumbnail small square  style={styles.activeImgStyle} source={require('../assets/tabs/influencer.png')} />
                <Text style={styles.inActivetextStyle}>influencer</Text>
              </View>
            ),
        }}
        name="influencers"
        component={InfluencersStackNavigator}
      />

    <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) =>
          focused ? (
            <View style={styles.activetabStyle}>
              <Thumbnail small square style={styles.activeImgStyle} source={require('../assets/tabs/followers-active.png')} />
              <Text style={styles.activetextStyle}>followers</Text>
            </View>
          ) : (
            <View style={styles.inActivetabStyle}>
              <Thumbnail small square  style={styles.activeImgStyle} source={require('../assets/tabs/followers.png')} />
              <Text style={styles.inActivetextStyle}>followers</Text>
            </View>
          ),
        }}
        name="followers"
        component={FollowersStackNavigator}
      />
      
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) =>
          focused ? (
            <View style={styles.activetabStyle}>
              <Thumbnail small square style={styles.activeImgStyle} source={require('../assets/tabs/wallet-active.png')} />
              <Text style={styles.activetextStyle}>Wallet</Text>
            </View>
          ) : (
            <View style={styles.inActivetabStyle}>
              <Thumbnail small square  style={styles.activeImgStyle} source={require('../assets/tabs/wallet.png')} />
              <Text style={styles.inActivetextStyle}>Wallet</Text>
            </View>
          ),
        }}
        name="wallet"
        component={WalletStackNavigator}
      />

    <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused}) =>
          focused ? (
            <View style={styles.activetabStyle}>
              <Thumbnail small square style={styles.activeImgStyle} source={require('../assets/tabs/menu-active.png')} />
              <Text style={styles.activetextStyle}>menu</Text>
            </View>
          ) : (
            <View style={styles.inActivetabStyle}>
              <Thumbnail small square  style={styles.activeImgStyle} source={require('../assets/tabs/menu.png')} />
              <Text style={styles.inActivetextStyle}>menu</Text>
            </View>
          ),
        }}
        name="menu"
        component={MenuStackNavigator}
      />
      {/* <Tab.Screen
        options={{
          title: 'Menu',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Thumbnail
                square
                style={{height: 25, width: 25}}
                source={require('../assets/tabs/menu-active.png')}
              />
            ) : (
              <Thumbnail
                square
                style={{height: 25, width: 25}}
                source={require('../assets/tabs/menu.png')}
              />
            ),
        }}
        name="menu"
        component={MenuStackNavigator}
      /> */}
    </Tab.Navigator>
  );
};



function MainStackNavigator({navigation, isLogin}) {
  //  const [value, setValue] = useState('0');

  //  const isLogin = await AsyncStorage.getItem('isLoggedIn');

  //  setValue(isLogin);
  return (
    <NavigationContainer>
      {isLogin ? (
        <DashboardTabNavigator />
      ) : (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="start_up_screen" component={StartupScreen} />
          <Stack.Screen name="slider" component={SliderScreen} />
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="forgot_password" component={ForgotPassword} />
        </Stack.Navigator>
      
      )}
    </NavigationContainer>
  );
}

const mapStateToProps = ({login: {isLogin}}) => ({
  isLogin,
});

export default connect(mapStateToProps)(MainStackNavigator);


const styles = StyleSheet.create({
  activetabStyle:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
    marginTop: 15,

  },
  activetextStyle:{
    fontSize: 12,
    color:'#f9943a',
    marginTop: 2  

  },
  inActivetextStyle:{
    fontSize: 12,
    color:'#747474',  
    marginTop: 2  
  },
  inActivetabStyle:{
    marginTop: 15,
    justifyContent:'center',
    alignItems:'center',
  },
  activeImgStyle:{
    height: 25,
    width: 25
  },
});