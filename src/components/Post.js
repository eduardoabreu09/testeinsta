import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image, Dimensions,ScrollView, TextInput,FlatList,TouchableOpacity} from 'react-native';


const width = Dimensions.get('screen').width
export default class Post extends Component {

 constructor(props){
   super(props)
   this.state={
     foto:this.props.foto,
     valorComentario: ''

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
  exibeComentario(comentario){
    if(comentario.length>0){
      return(
        <Text style={styles.likeText}>{comentario}</Text>
      
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
 addComentario(){
   let novocomentario = this.state.valorComentario
   if(novocomentario=== ''){
      return;
   }

   const fotoAtualizada = {
    ...this.state.foto,
    comentario:novocomentario
  }
  this.setState({foto:fotoAtualizada,valorComentario:''})
  this.inputComentario.clear()
  
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
                <View style={styles.comentario}>
                  
                  <Text>comentarios: </Text>  
                  {this.exibeComentario(foto.comentario)}                
                  

                
                  
                </View>
                <View style={styles.novocomentario}>
                  <TouchableOpacity onPress={this.addComentario.bind(this)}>
                  <Image source={require('../../fotos/torre.jpg')}
                  style={styles.icone}/>
                  </TouchableOpacity>
                 
                  <TextInput style={styles.input}
                  placeholder = "Adicione um comentario"
                  ref={ input=> this.inputComentario=input}
                  onChangeText ={texto=>this.setState({valorComentario:texto})}/>
                  

                    
                    
                  
                </View>
                
                
                  
              </View>
                
              
              
          </View>    
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    marginTop:10
  
  },
  novocomentario:{
    alignItems:'center',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'grey'
  },
  icone:{
    width:20,
    height:20,
    marginTop:10

  },
  likeText:{
    fontWeight:'bold',
    color:'black'
  
  },
  input:{
    height:40,

  },
  comentario:{
    flexDirection: 'row'

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
