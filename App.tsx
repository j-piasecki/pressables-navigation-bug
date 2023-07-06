import * as React from 'react';
import {Button, View, Text, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TextInput
        placeholder="THE FIRST INPUT"
        style={{backgroundColor: '#00FFFF', marginTop: 30, marginBottom: 30}}
      />
      <Button title="Press me" onPress={() => alert('Pressed!')} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <TextInput
        placeholder="THE SECOND INPUT"
        style={{backgroundColor: '#00FFFF'}}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Without navigation the button and the text input works:

// function App() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <TextInput
//         placeholder="THE FIRST INPUT"
//         style={{backgroundColor: '#00FFFF', marginTop: 30, marginBottom: 30}}
//       />
//       <Button title="Go to Details" onPress={() => alert('Pressed!')} />
//     </View>
//   );
// }

export default App;
