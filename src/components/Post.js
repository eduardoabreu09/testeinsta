import React, {Component} from 'react';
import {StyleSheet, Text, View,Image, Dimensions,TextInput,TouchableOpacity} from 'react-native';


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
    if(comentario!==''){
      return(
        comentario.map((coments)=>(
          <Text key={this.state.foto.id}>{coments}</Text>
        ))
        
      
      );
    }
      
    else{
      return;
      
    }

  }
  exibeUsuario(usuario){
    
      return(
      <View style={styles.fotoPerfil}> 
      <Image source={require('../../fotos/fotosinais.jpg')}
      style={styles.imagePerfil} />
      <Text style={styles.userText}>{usuario}</Text>

    </View>);

    
    
    
    
  }
  exibeImagem(idFoto){
    if(idFoto==="1"){
      return(
      <Image source={require('../../fotos/torre.jpg')}
      style={styles.image} />); 

    }
    if(idFoto==="2"){
      return(
      <Image source={require('../../fotos/louvre.jpg')}
      style={styles.image} /> );

    }
    if(idFoto==="3"){
      return(
      <Image source={require('../../fotos/tajmahal.jpg')}
      style={styles.image} /> );

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
   let novaLista = []
   if(this.state.valorComentario=== ''){
      return;
   }
   novaLista = [
     ...this.state.foto.comentario,this.state.valorComentario
   ]

   const fotoAtualizada = {
    ...this.state.foto,
    comentario:novaLista
  }
  this.setState({foto:fotoAtualizada,valorComentario:''})
  this.inputComentario.clear()
  
 }
  
  render() {
    const {foto} = this.state
   

    return (
      
          <View style={styles.container}>
              
            {this.exibeUsuario(foto.usuario)} 
                
                           
            {this.exibeImagem(foto.id)}
            

              <View style={styles.coracao}>
                <TouchableOpacity onPress= {this.like.bind(this)}>
                  <Image source={this.carregaIcone(foto.likeada)}
                  style={styles.fotoCoracao}/>
                </TouchableOpacity>
                {this.exibeLikes(foto.likers)}
                <View style={styles.comentario}>
                  
                  <Text style={styles.likeText}>comentarios: </Text>  
                  {this.exibeComentario(foto.comentario)}                
                  

                
                  
                </View>
                <View style={styles.novocomentario}>
                  
                  
                 <View style={{flex:1}}></View>
                  <TextInput style={styles.input}
                  placeholder = "Adicione um comentario"
                  ref={ input=> this.inputComentario=input}
                  onChangeText ={texto=>this.setState({valorComentario:texto})}/>
                  <View style={styles.seta}>
                    <TouchableOpacity onPress={this.addComentario.bind(this)}>
                    <Image source={require('../../fotos/arrow.png')}
                    style={styles.icone}/>
                    </TouchableOpacity>

                  </View>
                  

                  

                    
                    
                  
                </View>
                
                
                  
              </View>
                
              
              
          </View>    
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    
    marginBottom: 20
  
  },
  seta:{
    
   
    
    
  },
  novocomentario:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'grey'
  },
  icone:{
    width:20,
    height:20,
    

  },
  likeText:{
    fontWeight:'bold',
    color:'black'
  
  },
  input:{
    flex:1,
    height:40,
    

  },
  comentario:{
    

  },
  coracao:{
    marginTop:15,
    marginLeft:10,
    marginRight:10


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
