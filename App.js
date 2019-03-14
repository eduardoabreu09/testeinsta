/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet,FlatList} from 'react-native';
import Post from './src/components/Post';

export default class App extends Component {

 
  
  render() {
    const fotos = [
      {id:'1',usuario:'eduardo',likeada:false,likers:"5",comentario:["OLAOLA"] },
    {id:'2',usuario:'eduardo',likeada:false,likers:"1",comentario: []},
    {id:'3',usuario:'eduardo',likeada:false,likers:"0",comentario: ["oioi"] }]


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
    
    
    
  
  }
  
});
