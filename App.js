import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "./context/BlogContext";
import HomeScreen from "./src/screens/HomeScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const Stack = createStackNavigator();

const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Blogs"
        screenOptions={{
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen name="Blogs" component={HomeScreen}/>
        <Stack.Screen name="Show" component={ShowScreen}/>
        <Stack.Screen name="Create" component={CreateScreen}/>
        <Stack.Screen name="Edit" component={EditScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});


export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};