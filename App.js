import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// Navigation imports
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
// Component imports
import ToDoInput from "./screens/ToDoInput.js";
import ToDoDetails from "./screens/ToDoDetails.js";
import Account from "./screens/Account.js";

// Initialize Navigations
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class ToDoStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="toDoInput"
          component={ToDoInput}
          screenOptions={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "blue" },
          }}
        />

        <Stack.Screen
          name="toDoDetails"
          component={ToDoDetails}
          options={{
            title: "To-Do Details",
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "To-Dos") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Account") {
                iconName = focused ? "person-circle" : "person-circle-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "black",
          }}
        >
          <Tab.Screen name="To-Dos" component={ToDoInput} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: "#ecf0f1",
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// });
