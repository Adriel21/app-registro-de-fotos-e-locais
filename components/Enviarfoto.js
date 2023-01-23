import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Pressable } from 'react-native'
import * as ImagePicker from 'expo-image-picker';


const Enviarfoto = () => {

    const [foto, setFoto] = useState();

    const acessarCamera = async ()=>{
                                   
                                     // Carregar/Acionar a Câmera de forma assíncrona
  const imagem = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [16, 9],
    quality: 0.5,
  });

  console.log(imagem);
  setFoto(imagem.assets[0].uri)
}

  return (
    <View style={estilos.container}>
      <TextInput style={estilos.input}></TextInput>
      <Image source={{ uri: foto}} style={{ width: 350, height: 180, marginBottom: 30 }} />
      <Pressable style={estilos.botao}><Text style={{textAlign: "center", fontWeight: "bold"}} onPress={acessarCamera}>Tirar Foto</Text></Pressable>
    </View>
  )
}

export {Enviarfoto} 


const estilos = StyleSheet.create({
    container:{
        marginTop: 25,
        alignItems: "center",
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: "80%",
        marginBottom: 30,
    },
    botao:{
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: "80%",
        backgroundColor: "gray"
    }
})