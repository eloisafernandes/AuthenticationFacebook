import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tela1 from './src/views/Tela1'
import Tela2 from './src/views/Tela2'
import Tela3 from './src/views/Tela3'


function tela1({navigation}) {

  
  return (
    <View style={style.centralizar}>
      <Tela1 texto="tela 1"></Tela1>
      <Button
        title="Entrar"
        onPress={() => navigation.navigate('Tela2')}
      />
      <View style={{marginTop: 10}}>
        <Button style={{borderWidth: 10, borderRadius: 50}}
        title="Cadastrar"
        onPress={() => navigation.navigate('Tela3')}
      />

      </View>
      
    </View>
    
  )
}

function tela2({navigation}) {
  return (
    <View style={{flex: 1}}>
        <Tela2 texto="tela 2"></Tela2>
        <Button
          title="Back"
          onPress={() => navigation.navigate('Tela1')}
        />

      
    </View>
    
  )
}
function tela3() {
  return (
    <View style={{flex: 1}}>
      <Tela3 texto="tela 3"></Tela3>
      
    </View>
    
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tela1" >
        <Stack.Screen name="Tela1" options={{title:'Login'}} component={tela1} />
        <Stack.Screen name="Tela2" component={tela2} />
        <Stack.Screen name="Tela3"  component={tela3} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}



export default App;

const style=StyleSheet.create({
  centralizar: {

      justifyContent: "center",
      margin: 50,
      marginTop: 100,
      
  }
})



