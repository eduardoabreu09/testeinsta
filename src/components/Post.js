import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, Dimensions,ScrollView,FlatList,TouchableOpacity} from 'react-native';


const width = Dimensions.get('screen').width
export default class Post extends Component {

 constructor(props){
   super(props)
   this.state={
     foto:this.props.foto

     }
  }
  carregaIcone(likeada){
    return likeada ? require('../../fotos/like.png'):
     require('../../fotos/coracao.png')
   
  }
  exibeLikes(likers){
    if(likers>"0"){
      return(
        <Text style={styles.likeText}>{likers} {likers > "1" ? 'curtidas':'curtida'} </Text>
      
      );
    }
      
    else{
      return;
      
    }
  }
      
 like(){
   let novolike= this.state.foto.likers
  if(!this.state.foto.likeada){
    novolike++
  }
  if(this.state.foto.likeada){
    novolike--
  }

  



   const fotoAtualizada = {
     ...this.state.foto,
     likeada: !this.state.foto.likeada,
     likers: novolike
   }
   this.setState({foto:fotoAtualizada})
   
 }
  
  render() {
    const {foto} = this.state
   

    return (
      
          <View style={styles.container}>
              <View style={styles.fotoPerfil}>
                <Image source={require('../../fotos/torre.jpg')}
                style={styles.imagePerfil} />
                <Text style={styles.userText}>{foto.usuario}</Text>
              </View>              
              
              <Image source={require('../../fotos/torre.jpg')}
              style={styles.image} /> 

              <View style={styles.coracao}>
                <TouchableOpacity onPress= {this.like.bind(this)}>
                  <Image source={this.carregaIcone(foto.likeada)}
                  style={styles.fotoCoracao}/>
                </TouchableOpacity>
                {this.exibeLikes(foto.likers)}
                  
              </View>
                
              
              
          </View>    
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    marginTop:10
  
  },
  likeText:{
    fontWeight:'bold',
    color:'black'
  
  },
  coracao:{
    marginTop:15,
    marginLeft:10


  },
  fotoCoracao:{
    width:30,
    height:30,
      },
  
  userText:{
    color: 'black',
    fontSize: 20
  },
  image:{
    
    width:width,
    height:width

  },
  imagePerfil:{
    
    width:40,
    height:40,
    marginRight: 10,
    borderRadius:20


  },
  fotoPerfil:{
    flexDirection:'row',
    alignItems:'center',
    margin:20
    
  }
  
});
