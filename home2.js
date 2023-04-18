
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
const [exercicio , setExercicio] = useState ([
  {nome : 'Pular Corda' , key : 1},
  {nome : 'Escada' , key : 2},
  {nome : 'Flexão de Quadril' , key : 3},
  {nome : 'Polichinelos' , key : 4},
  {nome : 'Agachamento com pulo' , key : 5},
  {nome : 'Salto com mini obstaculos' , key : 6},
  {nome : 'Burpe' , key : 7},
])

  return (
    <View> 
      <View style={styles.container1}>
        <Text>Selecione uma tipo de treino Aerobico</Text>
      </View>
    <FlatList
      numColumns={1}
      keyExtractor={(item) => item.key}
      data={exercicio}
      renderItem={({item}) => (
        <Text style={styles.item}>{item.nome}</Text>
      )}
    />
     </View>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'silver',
    width: 355,
    height: 70,
    textAlign: 'center',
    paddingTop:20,
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
},
});