import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Image, Pressable, Alert } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Adicionar from './components/Adicionar';
import Salvos from './components/Salvos';


export default function App() {
  /* Inicializando através de uma constante
  o gerenciador de navegação Stack (pilha de telas) */
  const Stack = createNativeStackNavigator();
  
    

  

  return (
    <>
    <StatusBar />
     {/* O NavigationContainer deve envolver todas as telas
      navegáveis do nosso App. */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Adicionar"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#5451a6",
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            component={Adicionar}
            name="Adicionar"
            options={{
              headerShown: false,
            }}
          />

    

           <Stack.Screen component={Salvos} name="Salvos" /> 
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

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
