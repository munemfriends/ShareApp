import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
  Dimensions
} from 'react-native';

const Loader = props => {
  const {
    loading,
    ...attributes
  } = props;

  return (
    <View style = {styles.container}>  
      <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}
        onRequestClose={() => {console.log('close modal')}}>
        <View style={styles.modalBackground}>
          <ActivityIndicator size="large" animating={loading} color='white'/>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
//   container: {  
//     flex: 1,  
//     alignItems: 'center',  
//     justifyContent: 'center',  
//   },  
  modalBackground: {
    width:Dimensions.get('screen').width,
    height:Dimensions.get('screen').height*0.8,
    flex: 1,
    alignItems: 'center',
    alignContent:'center',
    justifyContent: 'center',
    backgroundColor: '#cc0000'
  },
  activityIndicatorWrapper: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center'
  }
});

export default Loader;