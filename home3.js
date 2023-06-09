import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
    <View style={styles.container1}>
      <Text style={styles.texto}>Polichinelo</Text>
    </View>
    <View style={styles.container}>
      <AntDesign name="caretright" size={44} color="black" />      
    </View>
    <View style={styles.container2}>
      <Text style={styles.texto2}> Polichinelo é um exercício físico, usado principalmente para alongar e aquecer os músculos dos membros posteriores e inferiores braços e pernas.Segue o Video com os movimentos e não se esforce em demasia.
      </Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#778899',
    alignItems: 'center',
    height:250,
    width: 360,
    marginHorizontal: 10,
    marginTop: 10,
    paddingTop: 100,
    borderRadius: 30   
  },
  container1 : {
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 30,
    height: 50,
    marginVertical: 5,
    paddingTop: 10  
  },
  texto : {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#778899'
  },
  container2:{
    backgroundColor: '#DCDCDC',
    marginVertical: 5,
    height: 300,
    borderRadius: 20,
    marginHorizontal: 10,
    paddingTop: 30
  },
  texto2 : {
    fontWeight: 'bold',
    fontSize: 15,
    color : '#778899',
    textAlign: 'center'
  }
});