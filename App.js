/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, Dimensions,ScrollView,FlatList} from 'react-native';
import Post from './src/components/Post';
const width = Dimensions.get('screen').width
export default class App extends Component {

 
  
  render() {
    const fotos = [
      {id:'1',usuario:'usuario1',likeada:false,likers:"5"},
    {id:'2',usuario:'usuario2',likeada:false,likers:"1"},
    {id:'3',usuario:'usuario3',likeada:false,likers:"0"}]


    return (
      <FlatList style={styles.container}
        keyExtractor={item=>item.id}
        data={fotos}
        renderItem={({item})=>
          <Post foto={item}/>    
      
      
      }
      
      
      />

     


         
         
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    marginTop:10
  
  }
  
});
