import * as React from 'react';
import {Alert, Button, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

function HomeScreen({navigation}: any) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  );
}

function DetailsScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Button
        title="Alert"
        onPress={() => {
          Alert.alert('Click');
        }}
      />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={TransitionPresets.ScaleFromCenterAndroid}
        />
        <Stack.Screen
          // options={{animationEnabled: false}}
          options={TransitionPresets.ScaleFromCenterAndroid}
          name="Details"
          component={DetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
