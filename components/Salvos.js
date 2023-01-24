import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import api from '../services/api'
const Salvos = () => {


    const [locais, setLocais] = useState([]);

    useEffect(() => {
        async function locaisVisitados() {
          try {
            const resposta = await api.get("/visitados.json");

            const dados = await resposta.data;

            let listaDeLoc = [];


            for (const loc in dados) {
                const objetoLoc = {
                  id: loc,
                  nomeFoto: dados[loc].nomeFoto, 
                  local: dados[loc].local,
                //   descricao: dados[post].descricao, // bla blah
                //   categoria: dados[post].categoria, // comportamento
                };
      
                listaDeLoc.push(objetoLoc);

            }

            setLocais(listaDeLoc);

    
          } catch (error) {
            console.log("Deu ruim na busca na API: " + error.message);
          }
        }
        locaisVisitados();

        
      }, []);

      console.log(locais)
    
  return (
    <View>
        {locais.map(({ id, nomeFoto}) => (
            <Text>{nomeFoto}</Text>
        ))}
      <Text>Salvos</Text>
    </View>
  )
}

export default Salvos

const styles = StyleSheet.create({})