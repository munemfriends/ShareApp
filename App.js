/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
import { Provider } from 'react-redux';
 import MainStackNavigator from './src/navigation/MainNavigator';
import {store} from './src/redux/store' 

 // export default class App extends Component{
 export default function App() {
 
   return (
     <Provider store={store}>
         <MainStackNavigator />
         </Provider>
   );
 }
 
 
 
 // export default App;
 