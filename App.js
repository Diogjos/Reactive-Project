
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';

export default function App() {
const [exercicio, setExercicio] = useState([
  {nome : "Aerobico" , key : 1},
  {nome : "Alomgamento" , key : 2},
  {nome : "Musculação" , key : 3},
  {nome : "Calistenia" , key : 4},
  {nome : "Mais+" , key : 5},
])
const apertarBotao = (key) => {
  setExercicio(
    (exerciciosAnteriores) => {
      return exerciciosAnteriores.filter(exercicio => exercicio.key != key);
    }   
  )
}
  return (
    <View> 
      <View style={styles.container1}>
        <Text>Selecione uma tipo de treino Hoje</Text>
      </View>
   <FlatList
    numColumns={1}
    keyExtractor={(item) => item.key}
    data={exercicio}
    renderItem={({item}) => (
      <TouchableOpacity onPress={() => apertarBotao(item.key)}>
      <Text style={styles.item}>{item.nome}</Text>
      </TouchableOpacity>
    )}
   />
   </View>
  );
}

const styles = StyleSheet.create({
  item:{
    backgroundColor: 'silver',
    width: 355,
    height: 110,
    textAlign: 'center',
    paddingTop:40,
    margin: 10,
    borderRadius: 30,
    fontWeight: 'bold',
    fontSize: 17,
    color: "#708090"
  },
  container1:{
    alignItems: 'center',
    backgroundColor: '#708090',
    width: 350,
    marginHorizontal:10,
    height: 70,
    justifyContent:'center',
    borderRadius: 10,
    marginBottom:10,	
  }
  },
);