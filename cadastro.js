import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Alert, StyleSheet, Text, View, TextInput, Button, TouchableOpacity,} from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Login</Text>
      <View style={styles.inputContainer}>
      <AntDesign name="user" size={24} color="black" />
        <TextInput
          multiline
          placeholder='Diga Seu Nome'
        />
      </View> 
      <View style={styles.inputContainer2}>
      <Entypo name="email" size={24} color="black" />
        <TextInput
          multiline
          placeholder='Diga seu Email'
        />
      </View> 
      <View style={styles.inputContainer3}>
      <Entypo name="email" size={24} color="black" />
        <TextInput
          multiline
          placeholder='Diga seu Email denovo' 
        />
      </View> 
      <View style={styles.inputContainer4}>

      <AntDesign name="key" size={24} color="black" />
        <TextInput
          multiline
          placeholder='Diga sua Senha'
        />
      </View> 
      <View style={styles.inputContainer5}>

      <AntDesign name="key" size={24} color="black" />
        <TextInput
          multiline
          placeholder='Diga sua Senha denovo'
        />
      </View> 
      
      <TouchableOpacity  onPress={() => Alert.alert('Cadastrado é só entrar agora')} style={styles.buttonContainer}> 
         
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
  inputContainer3: {
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
  inputContainer4:{
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
  inputContainer5:{
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