import { AntDesign } from '@expo/vector-icons';
import { Alert, StyleSheet, Text, View, TextInput, Button, TouchableOpacity,} from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Login</Text>
      <View style={styles.inputContainer}>
      <AntDesign name="mail" size={24} color="black" />
        <TextInput
          multiline
          placeholder='Enter your email'
        />
      </View> 
      <View style={styles.inputContainer2}>

      <AntDesign name="key" size={24} color="black" />
        <TextInput
          multiline
          placeholder='Enter your password'
        />
      </View> 
      <TouchableOpacity  onPress={() => Alert.alert('Voce entrou')} style={styles.buttonContainer}>
    
        <Text style={styles.boldText2}>ENTRAR</Text>

      </TouchableOpacity>
      <TouchableOpacity  onPress={() => Alert.alert('Bora Cadastrar')} style={styles.buttonContainer}>
    
        <Text style={styles.boldText2}>CADASTRAR</Text>

      </TouchableOpacity>
      
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  inputContainer:{
    borderWidth:1,
    borderColor: '#777',
    padding: 10,
    margin: 10,
    width: 320,
    height:50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputContainer2:{
    borderWidth:1,
    borderColor: '#777',
    padding: 10,
    margin: 10,
    width: 320,
    height:50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonContainer: {
    borderWidth:1,
    borderColor:'silver',
    margin: 10,
    width: 330,
    height: 55,
    borderRadius: 10,
    backgroundColor: 'silver',
  },
  boldText2:{
    textAlign: 'center',
    fontSize: 23,
    paddingTop:5,
    fontWeight: 'bold',
  },
});