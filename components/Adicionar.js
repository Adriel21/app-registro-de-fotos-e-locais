import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Image, Pressable, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MapView, { Marker } from 'react-native-maps';
import * as Location from "expo-location";
import api from '../services/api';



const Adicionar = ( { navigation }) => {
    const [texto, onChangeText] = useState("Titulo da foto/local");

    const [foto, setFoto] = useState();

    const acessarCamera = async () => {
                                   
                                     // Carregar/Acionar a Câmera de forma assíncrona
  const imagem = await ImagePicker.launchCameraAsync({
    allowsEditing: true,
    aspect: [16, 9],
    quality: 0.5,
  });

  console.log(imagem);
  setFoto(imagem.assets[0].uri)
}
  


  const salvar  = async () =>  {
    try {
      const resposta = await api.post("/visitados.json", {
        local: localizacao,
        nomeFoto: texto,
        caminhoFoto: foto,
      });
      Alert.alert("Salvo com sucesso!!!");
    } catch (error) {
      console.log("Deu ruim na busca da API: " + error.message);
    }
  }



    /* State para a geolocalização */
    const [minhaLocalizacao, setMinhaLocalizacao] = useState(null);
 
    useEffect( () => {
      async function obterLocalizacao(){
        // Acessando o status da requisição de permissão de uso
        const { status } = await Location.requestForegroundPermissionsAsync();
  
        // Verificando o status
        // if( status !== 'granted' ){
        //   Alert.alert("Ops!", "Você não autorizou o uso de recursos de localização");
        //   return;
        // }
  
        // Acessando os dados de geolocalização
        let localizacaoAtual = await Location.getCurrentPositionAsync({});
        
        // Adicionando os dados ao state
        setMinhaLocalizacao(localizacaoAtual);
      }
  
      obterLocalizacao();
    }, [] )
  
    console.log(minhaLocalizacao);
  
    const regiaoInicial = { // Estado de SP
      latitude: -23.533773,
      longitude: -46.65529,
      latitudeDelta: 10,
      longitudeDelta: 10
    }
  
    /* Usando state para controlar a localização */
    const [localizacao, setLocalizacao] = useState();
  
    const marcarLocal = (event) => {
      setLocalizacao({
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        latitude: minhaLocalizacao.coords.latitude,
        longitude: minhaLocalizacao.coords.longitude
      });
    } 
  

  

  return (
    <SafeAreaView style={estilos.container}>
      <View >
        <StatusBar style="auto" />
        <Text style={estilos.titulo}>APP 1 - Fotos de Lugares Visitados</Text>
        <View style={estilos.containerFoto}>
          <TextInput style={estilos.input}  onChangeText={onChangeText}
            value={texto} />
          <Image source={{ uri: foto}} style={{ width: 350, height: 180, marginBottom: 30 }} />
          <Pressable style={estilos.botao}>
            <Text style={{textAlign: "center", fontWeight: "bold"}} onPress={acessarCamera}>Tirar Foto</Text>
          </Pressable>
       </View>        

       <View style={estilos.container}>
         <View style={estilos.viewMapa}>
           <MapView 
             style={estilos.mapa} 
             region={localizacao ?? regiaoInicial}
             liteMode={false} 
             mapType="standard"
           >
             { localizacao &&
               <Marker 
                 coordinate={localizacao} 
                 title="Aqui!!!"
                 onPress={ e => console.log(e.nativeEvent) }
               />
             }
 
           </MapView>
           <View style={estilos.viewBotao}>
           <Button title='Onde estou?' onPress={marcarLocal} />
         </View>
         </View>
       </View>

        <View style={{flexDirection: "row", justifyContent: "space-around", }}>
          <Button title='Salvar Dados'  style={estilos.salvar} onPress={salvar}/>
          <Button title='Ir para Salvos'  style={estilos.salvar} onPress={() => navigation.navigate("Salvos")}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Adicionar;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  containerFoto: {
    marginTop: 25,
    alignItems: "center",
  },
  titulo: {
    textAlign: "center"
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
},
viewMapa: { flex: 1}, 
   viewBotao: {},
   mapa: {
     width: 350,
     height: 180,
     marginTop: 30,
     marginBottom: 20
   },

});
